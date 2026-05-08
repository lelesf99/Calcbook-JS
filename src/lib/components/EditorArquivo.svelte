<script lang="ts">
	import { tooltip } from '$lib/attachments/tooltip';
	import {
		activeVariant,
		buffer,
		currentRecordIndex,
		model,
		records,
		recordVariants
	} from '$lib/stores/editor.store';
	import type { FieldResolved } from '$lib/types';
	import { visibleFields } from '$lib/utils/visibility';
	import { ArrowDownToLine, ArrowUpToLine, Copy, Plus, Trash } from '@lucide/svelte';
	import Button from './Button.svelte';
	import FieldInput from './FieldInput.svelte';
	import PillNav from './PillNav.svelte';
	import ReadOnlyRaw from './ReadOnlyRaw.svelte';
	import RedefinesBar from './RedefinesBar.svelte';

	let fields = $state<FieldResolved[]>([]);
	let recInputValue = $state(1);
	let layoutToggle = $state('flex');

	$effect(() => {
		fields = $model ? visibleFields($model, $activeVariant) : [];
		recInputValue = $currentRecordIndex + 1;
		return () => {};
	});

	function createEmptyRecord() {
		if (!$model) return null;

		const buf = new Uint8Array($model.recordLength);
		buf.fill(0x20); // espaço
		return buf;
	}

	function addRecord(index: number) {
		const empty = createEmptyRecord();
		if (!empty) return;

		records.update((rs) => {
			const next = rs.slice();
			next.splice(index + 1, 0, empty);
			return next;
		});

		// mantém variantes alinhadas
		recordVariants.update((vs) => {
			const next = vs.slice();
			next.splice(index + 1, 0, {});
			return next;
		});

		currentRecordIndex.set(index + 1);
	}
	function duplicateRecord(index: number) {
		records.update((rs) => {
			const next = rs.slice();
			const src = rs[index];
			if (!src) return rs;

			const copy = new Uint8Array(src); // cópia profunda
			next.splice(index + 1, 0, copy);
			return next;
		});

		recordVariants.update((vs) => {
			const next = vs.slice();
			next.splice(index + 1, 0, { ...(vs[index] ?? {}) });
			return next;
		});

		currentRecordIndex.set(index + 1);
	}
	function deleteRecord(index: number) {
		if ($records.length === 1) {
			alert('Não é possível remover o último registro.');
			return;
		}

		const ok = confirm(`Deseja remover o registro ${index + 1}?`);
		if (!ok) return;

		records.update((rs) => {
			const next = rs.slice();
			next.splice(index, 1);
			return next;
		});

		recordVariants.update((vs) => {
			const next = vs.slice();
			next.splice(index, 1);
			return next;
		});

		// ajusta índice:
		// se deletou o último, volta um
		const nextIndex = index >= $records.length - 1 ? index - 1 : index;

		currentRecordIndex.set(Math.max(0, nextIndex));
	}

	function prevRecord() {
		currentRecordIndex.update((i) => Math.max(0, i - 1));
	}

	function nextRecord() {
		currentRecordIndex.update((i) => Math.min($records.length - 1, i + 1));
	}

	function onRecInputChange() {
		const idx = recInputValue - 1;

		if (idx < 0 || idx >= $records.length) {
			recInputValue = $currentRecordIndex + 1;
			return;
		}

		currentRecordIndex.set(idx);
	}
</script>
<h3>Editor Arquivo</h3>
<div class="controls">
	<!-- Controles de arquivo -->
	<PillNav gap=".1rem">
		<label for="recInput">Registro</label>
		<input
			type="number"
			name="recInput"
			id="recInput"
			bind:value={recInputValue}
			onchange={onRecInputChange}
			class:invalid={recInputValue < 1 || recInputValue > $records.length}
			min="1"
			max={$records.length}
			maxlength={$records.length}
		/>
		<span id="recLenSpan"> / {$records.length}</span>
	</PillNav>
	<PillNav>
		<Button onclick={prevRecord} {@attach tooltip('Ir para linha anterior')}>
			<ArrowUpToLine size={16} strokeWidth={3} />
		</Button>
		<Button onclick={() => addRecord($currentRecordIndex)} {@attach tooltip('Adicionar linha')}>
			<Plus size={16} strokeWidth={3} />
		</Button>
		<Button onclick={nextRecord} {@attach tooltip('Ir para a próxima linha')}>
			<ArrowDownToLine size={16} strokeWidth={3} />
		</Button>
		<Button
			onclick={() => duplicateRecord($currentRecordIndex)}
			secondary
			{@attach tooltip('Duplicar linha atual')}
		>
			<Copy size={16} strokeWidth={3} />
		</Button>
		<Button
			onclick={() => deleteRecord($currentRecordIndex)}
			danger
			{@attach tooltip('Deletar linha atual')}
		>
			<Trash size={16} strokeWidth={3} />
		</Button>
	</PillNav>
	<RedefinesBar />
</div>
<div class={['form', layoutToggle]}>
	{#if !$model || !$buffer}
		<div class="muted">Nenhum modelo ativo</div>
	{:else}
		{#each fields as field (field.name + ':' + field.offset)}
			{#if layoutToggle === 'list'}
				<label for={field.name}></label>
				<FieldInput {field} name={field.name} />
			{:else}
				<FieldInput
					name={field.name}
					{field}
					tooltipText={`${field.name} : ${field.pic?.raw} : [${field.offset}..${field.offset + field.byteLength - 1}]`}
				/>
			{/if}
		{/each}
	{/if}
</div>
<ReadOnlyRaw />

<style>
	h3 {
		font-family: var(--font-body);
		margin: 0;
	}
	#recLenSpan {
		white-space: nowrap;
		margin-right: 1rem;
	}
	#recInput {
		font-size: medium;
		padding: .5rem .6rem;
		margin-inline: 0.7rem;
		font-family: var(--font-body);
		color: var(--color-text);
		background-color: transparent;
		width: fit-content;
		border-radius: var(--border-radius-pill);
		border: none;
		z-index: 10;
		transition:
			background-color 300ms,
			color 300ms,
			outline 50ms,
			outline-offset 150ms linear;
	}
	#recInput:focus {
		background-color: var(--color-theme-1);
		outline: 1.2rem solid var(--color-theme-1);
		outline-offset: -0.5rem;
		color: var(--color-bg-2);
	}
	#recInput::-webkit-outer-spin-button,
	#recInput::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	#recInput[type='number'] {
		-moz-appearance: textfield;
	}
	#recInput.invalid {
		outline: 2px solid var(--color-error);
		background-color: var(--color-error);
		outline-offset: 2px;
	}
	label[for='recInput'] {
		margin-left: 1rem;
	}

	.controls {
		display: flex;
		flex-wrap: wrap;
		justify-content: baseline;
		gap: 1rem;
		width: 100%;
	}
	.form {
		display: flex;
		flex-wrap: wrap;
		max-height: 220px;
		flex-shrink: 0;
		border: var(--border-dashed);
		border-radius: var(--border-radius-2);
		padding: 2rem 1rem 1rem;
		overflow: auto;
		min-height: 0;
	}
	.form.list {
	}
</style>
