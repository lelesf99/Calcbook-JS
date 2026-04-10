import type { CopybookNode, Pic, PicType } from './types';

const PIC_REGEX = /PIC(TURE)?\s+([A-Za-z0-9()V\.]+)/i;
const OCCURS_REGEX = /OCCURS\s+(\d+)\s+TIMES/i;
const REDEF_REGEX = /REDEFINES\s+([A-Za-z0-9\-]+)/i;
const USAGE_REGEX = /USAGE\s+(?:IS\s+)?([A-Z0-9\-]+)/i;

function normalizeUsage(u) {
	if (!u) return undefined;
	const x = u.toUpperCase();
	if (x === 'COMP' || x === 'COMPUTATIONAL' || x === 'BINARY' || x === 'COMP-5') return x;
	if (x === 'COMP-3' || x === 'COMPUTATIONAL-3' || x === 'PACKED-DECIMAL') return 'COMP-3';
	return 'DISPLAY';
}

function segmentLength(seg) {
	if (!seg) return 0;

	// Case: 9999
	if (/^9+$/.test(seg)) {
		return seg.length;
	}

	// Case: 9(003)
	const m = seg.match(/^9\((\d+)\)$/);
	if (m) {
		return parseInt(m[1], 10);
	}
}

export function preprocessCopybook(text) {
	const rawLines = text.split(/\r?\n/);
	// Drop columns 1-6 (line numbers), remove pure comments, join continuations
	const cleaned = rawLines
		.map((l) => (l.length > 6 ? l.slice(6) : l))
		.map((l) => l.replace(/\r$/, ''))
		.filter((l) => l.trim().length > 0)
		.filter((l) => !l.trim().startsWith('*'));

	const lines = [];
	let current = '';
	for (let i = 0; i < cleaned.length; i++) {
		const line = cleaned[i];
		const trimmed = line.trimEnd();
		const endsWithHyphen = trimmed.endsWith('-');
		const endsWithoutDot = !trimmed.endsWith('.');
		if (endsWithHyphen || endsWithoutDot) {
			current += trimmed.replace(/-$/, '');
		} else {
			current += line;
			lines.push(current.trim());
			current = '';
		}
	}
	if (current.trim()) lines.push(current.trim());

	return lines;
}

export function parsePic(raw): Pic {
	let f = raw.toUpperCase().replace('.', '');
	let signed = false;
	if (f.startsWith('S')) {
		signed = true;
		f = f.slice(1);
	}
	if (f.startsWith('X')) {
		const m = f.match(/X\((\d+)\)/);
		const length = m ? parseInt(m[1], 10) : (f.match(/X/g) || []).length;
		return { raw, type: 'ALPHA', length, signed: false };
	}

	if (f.startsWith('9')) {
		const m = f.match(/^(9+|9\(\d+\))(?:V(9+|9\(\d+\)))?$/);

		if (m) {
			const intLen = segmentLength(m[1]);
			const decLen = segmentLength(m[2]);

			return {
				raw,
				type: 'NUMERIC',
				length: intLen + decLen,
				decimals: decLen || undefined,
				signed
			};
		}

		// fallback parsing (should rarely be needed)
		const parts = f.split('V');
		const intLen = (parts[0].match(/9/g) || []).length;
		const decLen = parts[1] ? (parts[1].match(/9/g) || []).length : 0;
		return {
			raw,
			type: 'NUMERIC',
			length: intLen + decLen,
			decimals: decLen || undefined,
			signed
		};
	}
}
export function parseCopybook(text): CopybookNode[] {
	const lines = preprocessCopybook(text);
	const root = [];
	const stack = [];
	let fillerId = 1;

	for (const line of lines) {
		const tokens = line.trim().split(/\s+/);
		const level = parseInt(tokens[0], 10);
		const nameToken = tokens[1];
		if (Number.isNaN(level) || !nameToken) continue;

		let name = nameToken.replace(/\.$/, '');
		const node: CopybookNode = {
			level,
			name,
			isFiller: name.toUpperCase() === 'FILLER',
			redefines: undefined,
			pic: undefined,
			occurs: undefined,
			children: []
		};

		// REDEFINES
		const rm = line.match(REDEF_REGEX);
		if (rm) node.redefines = rm[1].replace(/\.$/, '');

		// PIC
		const pm = line.match(PIC_REGEX);
		if (pm) {
			const pic = parsePic(pm[2]);
			if (pic) node.pic = pic;
		}

		// OCCURS
		const om = line.match(OCCURS_REGEX);
		if (om) node.occurs = { times: parseInt(om[1], 10) };

		// USAGE (COMP*, BINARY, DISPLAY) — support 'USAGE [IS] ...' and trailing shorthand after PIC
		let usageFound;
		if (pm) {
			// Only look for usage in the tail that comes after the PIC clause
			const afterPic = line.slice(pm.index + pm[0].length);

			// First try the canonical clause: USAGE [IS] <usage>
			let um = afterPic.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);
			if (!um) {
				// If not found, accept trailing shorthand like COMP-3 / COMP / COMP-5 / BINARY / DISPLAY / COMPUTATIONAL(-3)
				um = afterPic.match(
					/\b(COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i
				);
				if (um) usageFound = um[1];
			} else {
				usageFound = um[1];
			}
		} else {
			// No PIC clause matched; fall back to full-line search (least common but keeps old behavior working)
			let um = line.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);
			if (!um)
				um = line.match(/\b(COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i);
			if (um) usageFound = um[1];
		}

		if (usageFound) node.usage = normalizeUsage(usageFound);

		// Attach by level
		while (stack.length && stack[stack.length - 1].level >= level) stack.pop();
		if (stack.length === 0) root.push(node);
		else stack[stack.length - 1].children.push(node);
		stack.push(node);
	}

	// Ensure fillers are addressable
	(function rename(nodes) {
		for (const n of nodes) {
			if (n.isFiller) n.name = `FILLER-${fillerId++}`;
			rename(n.children);
		}
	})(root);

	return root;
}
