import type { FieldResolved } from '$lib/types';

function readInt(view: DataView, byteLength: number, signed: boolean, little = false): number {
	switch (byteLength) {
		case 1:
			return signed ? view.getInt8(0) : view.getUint8(0);
		case 2:
			return signed ? view.getInt16(0, little) : view.getUint16(0, little);
		case 4:
			return signed ? view.getInt32(0, little) : view.getUint32(0, little);
		default:
			throw new Error('Unsupported binary size');
	}
}
export function unpackBinary(buf: Uint8Array, field: FieldResolved): string {
	const view = new DataView(buf.buffer, buf.byteOffset + field.offset, field.byteLength);

	const signed = field.pic?.signed ?? false;
	const value = readInt(view, field.byteLength, signed, false);

	return value.toString();
}

export function packBinary(buf: Uint8Array, field: FieldResolved, value: string) {
	const view = new DataView(buf.buffer, buf.byteOffset + field.offset, field.byteLength);

	const num = Number(value);
	if (isNaN(num)) return;

	const signed = field.pic?.signed ?? false;

	switch (field.byteLength) {
		case 1:
			signed ? view.setInt8(0, num) : view.setUint8(0, num);
			break;
		case 2:
			signed ? view.setInt16(0, num, false) : view.setUint16(0, num, false);
			break;
		case 4:
			signed ? view.setInt32(0, num, false) : view.setUint32(0, num, false);
			break;
	}
}
