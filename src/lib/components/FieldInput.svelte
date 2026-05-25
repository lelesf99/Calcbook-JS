<script lang="ts">
	import { tooltip } from '$lib/attachments/tooltip';
	import { packField, unpackField } from '$lib/encoding/resolveFieldType';
	import { activeField, buffer, currentRecordIndex, updateBuffer } from '$lib/stores/editor.store';
	import type { FieldResolved } from '$lib/types';
	import { Minus, Plus } from '@lucide/svelte';
	import { maska } from 'maska/svelte';
	import Button from './Button.svelte';

	let { field, tooltipText = '', label = '', id = '', ...others } = $props();
	let inputRef;
	let value = $state('');
	let isNegative = $state(false);
	let active = $derived($activeField ? inputRef === $activeField.ref : false);
	let semaforo = true;

	$effect(() => {
		$currentRecordIndex;
		if (semaforo) value = unpackField($buffer, field);
		semaforo = true;
	});

	function onInput(e: Event) {
		semaforo = false;
		const fValue = field.pic?.signed ? (isNegative ? '-' : '+') + value : value;
		updateBuffer((buf) => {
			packField(buf, field, fValue);
		});
	}
	function buildMask(field) {
		return buildPlaceholder(field).replace(/9/g, '#').replace(/X/g, '*');
	}
	function buildPlaceholder(field: FieldResolved): string {
		if (!field.pic) return '';

		// -----------------------------
		// ALPHANUMERIC
		// -----------------------------
		if (field.pic.type === 'ALPHA') {
			return 'X'.repeat(field.byteLength);
		}

		// -----------------------------
		// NUMERIC
		// -----------------------------
		if (field.pic.type === 'NUMERIC') {
			const signed = !!field.pic.signed;
			const decimals = field.pic.decimals ?? 0;

			const totalDigits = field.byteLength;
			const intDigits = totalDigits - decimals;

			let placeholder = '';

			// parte inteira
			placeholder += '9'.repeat(intDigits);

			// parte decimal lógica
			if (decimals > 0) {
				placeholder += '.' + '9'.repeat(decimals);
			}

			return placeholder;
		}

		return '';
	}
</script>

<div
	style:flex-basis={`calc(${field.byteLength}ch + 1rem ${field.pic?.signed ? '+ 2.6rem' : ''} ${field.pic?.decimals ? '+ 1CH' : ''})`}
	class:active
	class="field"
>
	{#if label && id}
		<label for={id}>{label}</label>
	{/if}
	{#if field.pic?.signed}
		<Button
			onmousedown={(e) => {
				e.preventDefault();
			}}
			onclick={() => {
				isNegative = !isNegative;
				inputRef.focus();
				inputRef.dispatchEvent(
					new Event('input', {
						bubbles: true,
						cancelable: true
					})
				);
			}}
			muted
		>
			{#if !isNegative}
				<Plus />
			{:else}
				<Minus />
			{/if}
		</Button>
	{/if}
	<input
		bind:this={inputRef}
		bind:value
		use:maska
		{id}
		data-maska={buildMask(field)}
		{@attach tooltipText && tooltip(tooltipText, 'focus')}
		placeholder={buildPlaceholder(field)}
		oninput={onInput}
		onfocus={() => {
			activeField.set({ ...field, ref: inputRef });
		}}
		onblur={() => {
			semaforo = true;
			activeField.set(null);
		}}
		inputmode={field.pic?.type === 'NUMERIC' ? 'decimal' : 'text'}
		maxlength={field.byteLength + (field.pic?.decimals ? 1 : 0)}
		autocapitalize="off"
		autocorrect="off"
		spellcheck="false"
		autocomplete="off"
		{...others}
	/>
</div>

<style>
	label {
		position: absolute;
		left: 0rem;
		top: -2rem;
		white-space: nowrap;
		color: var(--color-text);
	}
	.field:has(label) {
		margin-top: 2.5rem;
	}
	.field {
		position: relative;
		display: flex;
		align-items: center;
		margin: 0.5rem;
		color: var(--color-text);
		font-family: var(--font-mono);
		background: #0b0c0d;
		outline: 2px solid #333;
		border-radius: var(--border-radius-2);
		transition:
			background 300ms,
			color 300ms,
			outline 50ms,
			outline-offset 150ms linear;
	}
	.field:last-child {
		border-bottom: none;
	}

	.field input {
		width: 100%;
		background: transparent;
		border: none;
		font: 1rem var(--font-mono);
		color: inherit;
		padding: 0.5rem;
	}
	.field input:focus {
		outline: none;
	}

	.field.active {
		border-radius: var(--border-radius-pill);
		background: var(--color-theme-1);
		outline: 0.8rem solid var(--color-theme-1);
		outline-offset: -0.4rem;
		color: var(--color-bg);
		width: 100%;
	}

	.field input::placeholder {
		color: #666;
		font-style: italic;
		font-family: var(--font-mono);
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
