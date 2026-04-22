import type { CopybookNode, FieldResolved, ResolvedModel } from '../types';

function storageLength(node: CopybookNode) {
	const usage = (node.usage || 'DISPLAY').toUpperCase();
	const pic = node.pic;
	if (!pic) return 0;

	if (usage === 'DISPLAY') return pic.length;

	if(usage === 'COMP-1') return 4;

	if(usage === 'COMP-2') return 8;

	if (usage === 'COMP' || usage === 'BINARY' || usage === 'COMP-5') {
		const totalDigits = pic.type === 'NUMERIC' ? pic.length : 0;
		if (totalDigits <= 4) return 2;
		if (totalDigits <= 9) return 4;
		return 8;
	}
	if (usage === 'COMP-3') {
		const totalDigits = pic.type === 'NUMERIC' ? pic.length : 0;
		return Math.ceil((totalDigits + 1) / 2);
	}
	return pic.length;
}
export function resolveModel(root: CopybookNode[]): ResolvedModel {
	// name index
	const nameIndex = new Map();
	(function indexNodes(nodes: CopybookNode[]) {
		for (const n of nodes) {
			nameIndex.set(n.name, n);
			indexNodes(n.children);
		}
	})(root);

	// redefine groups: base -> [base, members...]
	const groupsSet: Record<string, Set<string>> = {};
	(function collectGroups(nodes: CopybookNode[]) {
		for (const n of nodes) {
			if (n.redefines) {
				const base = n.redefines;
				groupsSet[base] ||= new Set([base]);
				groupsSet[base].add(n.name);
			}
			collectGroups(n.children);
		}
	})(root);

	const redefineGroups: Record<string, string[]> = {};
	for (const [k, setv] of Object.entries(groupsSet)) redefineGroups[k] = Array.from(setv);

	const memberToBase = {};
	for (const [base, arr] of Object.entries(redefineGroups))
		for (const m of arr) memberToBase[m] = base;

	const sizeOf = (node: CopybookNode) => {
		if (node.children.length && !node.pic && !node.redefines) {
			let total = 0;
			for (const c of node.children) total += sizeOf(c);
			const times = node.occurs?.times ?? 1;
			return total * times;
		}
		const len = node.pic ? storageLength(node) : 0;

		const times = node.occurs?.times ?? 1;
		return len * times;
	};

	const offsetByName = {};
	const fieldsFlat: FieldResolved[] = [];
	let recordLength = 0;
	const variantStack = [];

	const walk = (nodes, currOffset) => {
		let offset = currOffset;
		for (const node of nodes) {
			let thisOffset = offset;

			// if REDEFINES, align to base offset
			if (node.redefines) {
				const base = node.redefines;
				if (!(base in offsetByName))
					console.warn(
						`REDEFINES base not found yet: ${base}. Ensure base appears before redefiner.`
					);
				else thisOffset = offsetByName[base];
			}

			if (!(node.name in offsetByName)) offsetByName[node.name] = thisOffset;

			// if node is part of a redefine group, push its tag for visibility filtering
			const baseOfMember = memberToBase[node.name];
			let pushed = false;
			if (baseOfMember) {
				variantStack.push({ group: baseOfMember, member: node.name });
				pushed = true;
			}

			const totalSize = sizeOf(node);

			if (node.children.length && !node.pic) {
				const occurs = node.occurs?.times ?? 1;
				const perOccSize = occurs ? totalSize / occurs : totalSize;
				for (let i = 0; i < occurs; i++) walk(node.children, thisOffset + i * perOccSize);
			} else {
				const occurs = node.occurs?.times ?? 1;
				const len = node.pic ? storageLength(node) : 0;
				for (let i = 0; i < occurs; i++) {
					fieldsFlat.push({
						...node,
						offset: thisOffset + i * len,
						byteLength: len,
						variantPath: variantStack.length ? variantStack.slice() : undefined
					});
				}
			}

			if (pushed) variantStack.pop();

			// advance running offset only if not redefining
			if (!node.redefines) {
				offset += totalSize;
				recordLength = Math.max(recordLength, offset);
			} else {
				recordLength = Math.max(recordLength, thisOffset + totalSize);
			}
		}
	};
	walk(root, 0);

	return {
		root,
		fieldsFlat,
		recordLength,
		redefineGroups,
		nameIndex: Object.fromEntries(nameIndex)
	};
}
// cálculo de offsets
// redefineGroups
