import type { FieldResolved } from '$lib/types';

export function packComp3(buffer: Uint8Array, field: FieldResolved, value: string) {
	const bytes = field.byteLength;
	const signed = !!field.pic?.signed;

	let negative = false;
	let digits = value;

	// --------------------------------
	// CONTRATO: +999 | -999 | 999
	// --------------------------------
	if (signed) {
		if (value[0] === '-') negative = true;
		digits = value.slice(1); // remove sinal
	}

	// agora digits contém SOMENTE números
	const totalDigits = bytes * 2 - 1;
	const padded = digits.padStart(totalDigits, '0');

	let pos = padded.length - 1;

	for (let i = bytes - 1; i >= 0; i--) {
		let high: number;
		let low: number;

		if (i === bytes - 1) {
			// último byte → low nibble = sinal
			high = Number(padded[pos--]);
			low = negative ? 0x0d : 0x0c;
		} else {
			low = Number(padded[pos--]);
			high = Number(padded[pos--]);
		}

		buffer[field.offset + i] = (high << 4) | low;
	}
}
export function unpackComp3(buffer: Uint8Array, field: FieldResolved): string {
	const bytes = field.byteLength;
	const signed = !!field.pic?.signed;

	let digits = '';
	let negative = false;

	for (let i = field.offset; i < field.offset + bytes; i++) {
		const b = buffer[i];
		const high = (b >> 4) & 0xf;
		const low = b & 0xf;

		if (i === field.offset + bytes - 1) {
			// último byte: low nibble é sinal
			if (low === 0x0d) negative = true;
			digits += high.toString();
		} else {
			digits += high.toString() + low.toString();
		}
	}

	if (signed) {
		return (negative ? '-' : '+') + digits;
	}

	return digits;
}
