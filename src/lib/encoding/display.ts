import { currentRecordIndex, records } from '$lib/stores/editor.store';
import type { FieldResolved } from '$lib/types';
import { get } from 'svelte/store';

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder('ascii');
const POSITIVE_OVERPUNCH = ['{', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const NEGATIVE_OVERPUNCH = ['}', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'];

export function unpackDisplay(buffer: Uint8Array, field: FieldResolved): string {
	const bytes = buffer.buffer.slice(field.offset, field.offset + field.byteLength);
	const str = textDecoder.decode(bytes);

	if (field.pic?.type === 'NUMERIC') {
		const signed = !!field.pic.signed;
		const decimals = field.pic.decimals ?? 0;

		let negative = false;
		let digits = str;

		if (signed) {
			const lastChar = str.at(-1)!;

			const posIndex = POSITIVE_OVERPUNCH.indexOf(lastChar);
			const negIndex = NEGATIVE_OVERPUNCH.indexOf(lastChar);

			if (posIndex >= 0) {
				digits = str.slice(0, -1) + posIndex;
			} else if (negIndex >= 0) {
				negative = true;
				digits = str.slice(0, -1) + negIndex;
			}
		}

		if (digits.trim() === '') return '';

		if (decimals > 0) {
			const i = digits.slice(0, -decimals);
			const d = digits.slice(-decimals);
			return `${i}.${d}`;
		}

		return `${digits}`;
	}

	// ALPHA
	return str.replace(/[\u0000 ]+$/g, '');
}

export function packDisplay(buffer: Uint8Array, field: FieldResolved, value: string): void {
	const len = field.byteLength;
	const raw = String(value);

	// -------------------------------
	// NUMERIC DISPLAY (ZONED DECIMAL)
	// -------------------------------
	if (field.pic?.type === 'NUMERIC') {
		const signed = !!field.pic.signed;
		const decimals = field.pic.decimals ?? 0;

		const normalized = raw.replace(',', '.');

		// Detecta sinal lógico
		let negative = false;
		let numeric = normalized;

		if (signed && /^[+-]/.test(numeric)) {
			negative = numeric[0] === '-';
			numeric = numeric.slice(1);
		}
		const [iRaw = '', dRaw = ''] = numeric.split('.');

		const intPart = iRaw.replace(/\D/g, '');
		const decPart = dRaw.replace(/\D/g, '');

		const digitCount = len;
		const scale = decimals;
		const intLen = digitCount - scale;

		const digits = intPart.padStart(intLen, ' ') + decPart.padEnd(scale, ' ');

		if (!signed) {
			buffer.set(textEncoder.encode(digits), field.offset);
			return;
		}

		// OVERPUNCH NO ÚLTIMO DÍGITO
		const lastDigit = Number(digits.at(-1) ?? 0);

		const overpunchChar = negative ? NEGATIVE_OVERPUNCH[lastDigit] : POSITIVE_OVERPUNCH[lastDigit];

		const zoned = digits.slice(0, -1) + overpunchChar;

		buffer.set(textEncoder.encode(zoned), field.offset);
		return;
	}

	// -------------------------------
	// ALPHANUMERIC DISPLAY
	// -------------------------------
	const text = raw.padEnd(len, ' ');
	buffer.set(textEncoder.encode(text), field.offset);
}
