<script lang="ts">
	import {
		activeField,
		buffer,
		currentRecordIndex,
		records
	} from '$lib/stores/editor.store';
	import { inview } from 'svelte-inview';
	import { get } from 'svelte/store';

	const decoder = new TextDecoder('ascii');
	const recordButtons: HTMLButtonElement[] = [];
	let isInView: boolean[] = [];
	let highlight: Highlight;

	function scrollToCurrentRecord() {
		recordButtons[$currentRecordIndex]?.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'nearest'
		});
	}
	function selectRecord(index: number) {
		currentRecordIndex.set(index);
	}
	function createHighlight() {
		const field = get(activeField);
		if (!CSS.highlights) {
			console.log('CSS Custom Highlight API not supported.');
			return;
		}
		CSS.highlights.clear();
		if (!field) return;
		const preEl = recordButtons[$currentRecordIndex]?.querySelector('pre');
		if (!preEl) return;
		const textNode = preEl.firstChild;
		console.log(textNode, textNode.nodeType === Node.TEXT_NODE);
		if (textNode && textNode.nodeType === Node.TEXT_NODE) {
			const range = new Range();
			range.setStart(textNode, field.offset);
			range.setEnd(textNode, field.offset + field.byteLength);

			highlight = new Highlight(range);
			console.log(field.offset, field.offset, field.byteLength);
			CSS.highlights.set('raw-highlight', highlight);
			console.log(CSS.highlights.values().toArray());
		}
	}
	$effect(() => {
		if (!isInView[$currentRecordIndex]) scrollToCurrentRecord();
		$activeField;
		$buffer;
		createHighlight();
		return () => {};
	});
</script>

<div class="container">
	<div class="file-table">
		<div class="table-header table-row">
			<span># Registro</span>
		</div>
		{#each $records as record, i}
			<div class="table-row" class:current-record={$currentRecordIndex === i}>
				<span class="row-index">{i + 1}</span>
				<button
					use:inview
					oninview_change={(event) => (isInView[i] = event.detail.inView)}
					bind:this={recordButtons[i]}
					type="button"
					onclick={() => selectRecord(i)}
				>
					<pre>{decoder.decode(record)}</pre>
				</button>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		flex: 1 0 40%;
		overflow: auto;
		background-color: var(--color-bg);
		border-radius: var(--border-radius-2);
		padding: 2px;
		padding-right: 7px;
	}
	.file-table {
		font-family: var(--font-mono);
		width: max-content;
		display: flex;
		flex-direction: column;
	}
	.table-header {
		border-bottom: 2px dashed var(--color-bg-2);
		padding: 1rem !important;
	}
	.table-row {
		display: flex;
		align-items: center;
		border-radius: var(--border-radius-1);
		width: 100%;
		padding: 0 1rem;
		transition: all 50ms ease-out;
	}
	.table-row:nth-child(odd):not(.table-header) {
		background-color: var(--color-bg-2);
	}
	.table-row:not(.table-header):hover,
	.table-row:not(.table-header):focus {
		transform: translateX(5px);
	}

	.row-index {
		border-right: var(--border-dashed);
		font-family: var(--font-body);
		padding-right: 1rem;
		margin-right: 1rem;
		line-height: 3rem;
		flex: 0 0 2rem;
	}
	.table-row:nth-child(odd) .row-index {
		border-right: 2px dashed var(--color-bg);
	}
	.current-record {
		outline: 2px dashed var(--color-theme-2);
		z-index: 10;
	}
	button {
		font-size: large;
		cursor: pointer;
		background-color: transparent;
		border: none;
		color: var(--color-text);
		white-space: nowrap;
	}
	::highlight(raw-highlight) {
		background-color: var(--color-muted-2);
	}
</style>
