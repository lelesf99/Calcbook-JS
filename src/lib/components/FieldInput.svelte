<script lang="ts">
	import { buffer, rawHighlight, updateBuffer, currentRecordIndex } from '$lib/stores/editor.store';
	import { unpackField, packField } from '$lib/domain/encoding/display';
	import { tooltip } from '$lib/attachments/tooltip';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';

	let { field } = $props();

	let fValue = $state('');
	let semaforo = true;
	const tooltipText = `${field.name} : ${field.pic?.raw} : [${field.offset}..${field.offset + field.byteLength - 1}]`;

	$effect(() => {
		if ($buffer && semaforo) {
			fValue = unpackField($buffer, field);
		}
		semaforo = true;
	});
	function onInput(e: Event) {
		semaforo = false;
		updateBuffer((buf) => {
			packField(buf, field, fValue);
		});
	}

	function showHighlight() {
		rawHighlight.set({
			recordIndex: get(currentRecordIndex),
			offset: field.offset,
			length: field.byteLength
		});
	}
	function hideHighlight() {
		rawHighlight.set(null);
	}
</script>

<div class="field" style:flex-basis={`calc(${field.byteLength}ch + 3.5rem)`}>
	<input
		{@attach tooltip(tooltipText)}
		placeholder={field.pic?.type === 'NUMERIC'
			? '9'.repeat(field.byteLength)
			: 'X'.repeat(field.byteLength)}
		name={field.name}
		bind:value={fValue}
		oninput={onInput}
		onfocus={showHighlight}
		onblur={hideHighlight}
		maxlength={field.byteLength}
		
		inputmode={field.pic?.type === 'NUMERIC' ? 'decimal' : 'text'}
		autocapitalize="off"
		autocorrect="off"
		spellcheck="false"
		autocomplete="off"
	/>
</div>

<style>
	.field {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: baseline;
		gap: 0.2rem;
		padding: 1rem;
		border-bottom: 1px dashed #222;
		color: var(--color-text);
		font-family: var(--font-mono);
	}

	.field:last-child {
		border-bottom: none;
	}

	.field input {
		width: 100%;
		font: 1rem var(--font-mono);
		color: var(--color-text);
		background: #0b0c0d;
		border: 2px solid #333;
		border-radius: var(--border-radius-2);
		padding: 0.8rem 0.5rem;
		transition:
			background 300ms,
			color 300ms,
			outline 50ms,
			outline-offset 150ms linear;
	}

	.field input:focus {
		background: var(--color-theme-1);
		outline: 0.8rem solid var(--color-theme-1);
		outline-offset: -0.5rem;
		color: var(--color-bg);
		width: 100%;
	}

	.field input::placeholder {
		color: #666;
		font-style: italic;
		font-family: var(--font-mono);
	}
</style>
