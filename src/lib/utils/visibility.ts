import type { Writable } from 'svelte/store';
import type { FieldResolved, ResolvedModel } from '../types';

export function fieldVisible(f, activeVariant) {
	if (!f.variantPath || f.variantPath.length === 0) return true;
	for (const tag of f.variantPath) {
		const selected = activeVariant[tag.group] || tag.group;
		if (selected !== tag.member) return false;
	}
	return true;
}
export function visibleFields(
	model: ResolvedModel,
	activeVariant: Record<string, string>
): FieldResolved[] {
	return model.fieldsFlat.filter((f) => fieldVisible(f, activeVariant));
}
