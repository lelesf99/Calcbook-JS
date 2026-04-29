<script lang="ts">
	import { tooltip } from '$lib/attachments/tooltip';
	import { packField, unpackField } from '$lib/encoding/resolveFieldType';
	import { activeField, buffer, updateBuffer } from '$lib/stores/editor.store';
	import type { FieldResolved } from '$lib/types';
	import { Plus, Minus } from '@lucide/svelte';
	import Button from './Button.svelte';
	import { onMount } from 'svelte';

	let { field, tooltipText = '', ...others } = $props();
	let inputRef;
	let value = $state('');
	let fValue = $derived(formatValue(value));
	$inspect(value, fValue);
	let isNegative = $state(false);

	$effect(() => {
		value = formatValue(unpackField($buffer, field));
	});

	function onInput(e) {
		updateBuffer((buf) => {
			packField(buf, field, parseValue(value));
		});
	}
	function parseValue(value: string) {
		if (field.pic?.type !== 'NUMERIC') return value;
		return (field.pic?.signed ? (isNegative ? '-' : '+') : '') + value.replace(/\D/g, '');
	}
	function formatValue(value: string) {
		if (field.pic?.type !== 'NUMERIC') return value;
		const pic = field.pic;
		if (!pic) return value;
		if (!value) return value;

		if (pic.type === 'NUMERIC') {
			const intSize = field.byteLength - pic.decimals;

			let digits = value.replace(/\D/g, '');
			if (digits.length > intSize) {
				const int = digits.slice(0, intSize);
				const dec = digits.slice(-(digits.length - intSize));
				digits = dec ? `${int}.${dec}` : int;
			}
			return digits;
		}
		return value;
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
	class="field"
	style:flex-basis={`calc(${field.byteLength + (field.pic?.signed ? 1 : 0)}ch + 2.4rem ${field.pic?.signed ? '+ 2.6rem' : ''} ${field.pic?.decimals ? '+ 1.5rem' : ''})`}
>
	{#if field.pic?.signed}
		<Button
			onclick={() => {
				isNegative = !isNegative;
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
				<Plus size={16} strokeWidth={3} />
			{:else}
				<Minus size={16} strokeWidth={3} />
			{/if}
		</Button>
	{/if}
	<input
		bind:this={inputRef}
		bind:value
		{@attach tooltip(tooltipText, 'focus')}
		placeholder={buildPlaceholder(field)}
		oninput={onInput}
		onfocus={() => activeField.set(field)}
		onblur={() => activeField.set(null)}
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
	.field {
		position: relative;
		display: flex;
		align-items: center;
		padding: 0.5rem;
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
		border-radius: var(--border-radius-pill);
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
