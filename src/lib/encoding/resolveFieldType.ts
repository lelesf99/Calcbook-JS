import type { FieldKind, FieldResolved } from '$lib/types';
import { packBinary, unpackBinary } from './binary';
import { packComp1, unpackComp1 } from './comp1';
import { packComp2, unpackComp2 } from './comp2';
import { packComp3, unpackComp3 } from './comp3';
import { packDisplay, unpackDisplay } from './display';

function resolveFieldKind(field: FieldResolved): FieldKind {
	const usage = field.usage?.toUpperCase();

	if (!usage || usage === 'DISPLAY') return 'DISPLAY';

	if (usage === 'COMP-1') return 'COMP-1';
	if (usage === 'COMP-2') return 'COMP-2';

	if (usage === 'COMP-3' || usage === 'PACKED-DECIMAL') {
		return 'COMP-3';
	}

	// COMP / BINARY / COMPUTATIONAL
	if (usage === 'COMP' || usage === 'COMPUTATIONAL' || usage === 'BINARY') {
		return 'BINARY';
	}

	// Fallback seguro
	return 'DISPLAY';
}
export function packField(buffer: Uint8Array, field: FieldResolved, value: string) {
	switch (resolveFieldKind(field)) {
		case 'DISPLAY':
			return packDisplay(buffer, field, value);
		case 'COMP-3':
			return packComp3(buffer, field, value);
		case 'BINARY':
			return packBinary(buffer, field, value);
	}
}

export function unpackField(buffer: Uint8Array, field: FieldResolved) {
	switch (resolveFieldKind(field)) {
		case 'DISPLAY':
			return unpackDisplay(buffer, field);
		case 'COMP-3':
			return unpackComp3(buffer, field);
		case 'BINARY':
			return unpackBinary(buffer, field);
	}
	return '';
}
