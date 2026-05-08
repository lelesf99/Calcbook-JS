import type { ResolvedModel } from '$lib/types';
import { derived, get, writable } from 'svelte/store';

export interface ActiveField {
	name: string;
	recordIndex: number;
	offset: number;
	byteLength: number;
	ref?: HTMLElement;
}
export const activeField = writable<ActiveField | null>(null);

export const model = writable<ResolvedModel | null>(null);
export const records = writable<Uint8Array[]>([]);
export const currentRecordIndex = writable(0);

export const buffer = derived([records, currentRecordIndex], ([$records, $idx]) => $records[$idx]);
get(buffer)
export const activeVariantDefault = writable<Record<string, string>>({});
export const recordVariants = writable<Record<string, string>[]>([]);

export const activeVariant = derived(
	[activeVariantDefault, recordVariants, currentRecordIndex],
	([$default, $recv, $idx]) => ({
		...$default,
		...($recv[$idx] ?? {})
	})
);
export function setModel(m: ResolvedModel) {
	model.set(m);
}

export function setRecords(r: Uint8Array[]) {
	records.set(r);
	recordVariants.set(r.map(() => ({})));
	currentRecordIndex.set(0);
}

export function setActiveVariant(base: string, member: string) {
	activeVariantDefault.update((v) => ({ ...v, [base]: member }));

	recordVariants.update((rv) => {
		const i = get(currentRecordIndex);
		const next = [...rv];
		next[i] = { ...(next[i] ?? {}), [base]: member };
		return next;
	});
}

export function updateBuffer(mutator: (b: Uint8Array) => void) {
	records.update((rs) => {
		const idx = get(currentRecordIndex);
		if (!rs[idx]) return rs;

		const next = rs.slice(); // novo array
		const buf = new Uint8Array(next[idx]); // nova referência do buffer

		mutator(buf);

		next[idx] = buf;
		return next;
	});
}

export function setActiveField(field: ActiveField | null) {
	activeField.set(field);
}

export function clearActiveField() {
	activeField.set(null);
}
