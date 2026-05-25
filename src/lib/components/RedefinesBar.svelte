<script lang="ts">
	import { model, activeVariant } from '$lib/stores/editor.store';
	import { setActiveVariant } from '$lib/stores/editor.store';

	import PillNav from './PillNav.svelte';
	import Button from './Button.svelte';
	import ChevronsLeft from '@lucide/svelte/icons/chevrons-left';
	import ChevronsRight from '@lucide/svelte/icons/chevrons-right';
	import { visibleFields } from '$lib/utils/visibility';

	function prev(base, members) {
		const curr = $activeVariant[base] ?? base;
		const i = members.indexOf(curr);
		const next = members[(i - 1 + members.length) % members.length];
		setActiveVariant(base, next);
	}

	function next(base, members) {
		const curr = $activeVariant[base] ?? base;
		const i = members.indexOf(curr);
		const next = members[(i + 1) % members.length];
		setActiveVariant(base, next);
	}

	function hasVisibleFieldForBase(base: string): boolean {
		if (!$model) return false;

		// campos atualmente visíveis no formulário
		const fields = visibleFields($model, $activeVariant);

		// se algum campo pertence a esse redefine (ou a um filho dele)
		return fields.some((f) => f.variantPath?.some((v) => v.group === base));
	}
</script>

{#if $model}
	{#each Object.entries($model.redefineGroups) as [base, members]}
		{#if members.length > 1 && hasVisibleFieldForBase(base)}
			<PillNav>
				{#if hasVisibleFieldForBase(base)}
					<Button onclick={() => prev(base, members)}
						><ChevronsLeft  /></Button
					>
					<span class="redef-value">
						{$activeVariant[base] ?? base}
					</span>
					<Button onclick={() => next(base, members)}
						><ChevronsRight  /></Button
					>
				{/if}
			</PillNav>
		{/if}
	{/each}
{/if}

<style>
</style>
