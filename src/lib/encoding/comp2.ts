import type { FieldResolved } from '$lib/types';

export function unpackComp2(buf: Uint8Array, field: FieldResolved): string {
	const view = new DataView(buf.buffer, buf.byteOffset + field.offset, field.byteLength);

	const value = view.getFloat64(0, false);
	return Number.isFinite(value) ? value.toString() : '';
}

export function packComp2(buf: Uint8Array, field: FieldResolved, value: string) {
	const view = new DataView(buf.buffer, buf.byteOffset + field.offset, field.byteLength);

	const num = Number(value);
	view.setFloat64(0, isNaN(num) ? 0 : num, false);
}
