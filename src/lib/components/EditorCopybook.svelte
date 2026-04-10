<script lang="ts">
	import PillNav from '$lib/components/PillNav.svelte';
	import { parseCopybook } from '$lib/domain/copybook/parseCopybook';
	import { resolveModel } from '$lib/domain/copybook/resolveModel';
	import { PRESET_COPYBOOKS } from '$lib/services/presets.service';

	import { model, setModel, setRecords } from '$lib/stores/editor.store';
	import { debounce } from '$lib/utils/debounce';
	import Button from './Button.svelte';

	let copybookText = $state('');
	let error = $state('');
	function processCopybook(text) {
		try {
			const m = resolveModel(parseCopybook(text));
			setModel(m);

			const rec = new Uint8Array(m.recordLength);
			rec.fill(0x20);
			setRecords([rec]);

			error = '';
		} catch (e: any) {
			error = e?.message ?? 'Erro ao processar copybook';
		}
	}
	const debouncedProcessCopybook = debounce(processCopybook, 300);
	function applyPreset(name: string) {
		copybookText = PRESET_COPYBOOKS[name] + '\n';
		processCopybook(copybookText);
	}

	$effect(() => {
		if (!copybookText?.trim()) {
			setModel(null);
			error = '';
			return;
		}

		debouncedProcessCopybook(copybookText);
	});
</script>

<h3>Editor Copybook</h3>

<PillNav>
	{#each Object.keys(PRESET_COPYBOOKS) as key}
		<Button onclick={() => applyPreset(key)}>
			{key}
		</Button>
	{/each}
</PillNav>

<textarea bind:value={copybookText}></textarea>

<div class="status">
	<b>len: {$model ? $model.recordLength : '—'}</b>
	{#if error}<span class="err">{error}</span>{/if}
</div>

<style>
	h3 {
		font-family: var(--font-body);
		margin: 0;
	}
	textarea {
		width: 100%;
		height: 100%;
		min-height: 220px;
		font-family: var(--font-mono);
		color: var(--color-text);
		background: var(--color-bg);
		border: var(--border-dashed);
		border-radius: var(--border-radius-1);
		padding: 10px;
		white-space: pre;
		resize: none;
	}
</style>
