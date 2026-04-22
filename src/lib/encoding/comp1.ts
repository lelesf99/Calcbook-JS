import type { FieldResolved } from '$lib/types';

export function unpackComp1(buf: Uint8Array, field: FieldResolved): string {
	const view = new DataView(buf.buffer, buf.byteOffset + field.offset, field.byteLength);

	const value = view.getFloat32(0, false); // big-endian
	return Number.isFinite(value) ? value.toString() : '';
}

export function packComp1(buf: Uint8Array, field: FieldResolved, value: string): void {
	const view = new DataView(buf.buffer, buf.byteOffset + field.offset, field.byteLength);

	const num = Number(value);
	view.setFloat32(0, isNaN(num) ? 0 : num, false);
}
