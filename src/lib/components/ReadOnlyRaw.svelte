<script lang="ts">
	import { records, currentRecordIndex } from '$lib/stores/editor.store';
	import { inview } from 'svelte-inview';

	const decoder = new TextDecoder('ascii');
	const recordButtons: HTMLButtonElement[] = [];
	let isInView: boolean[] = [];

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
	$effect(() => {
		if (!isInView[$currentRecordIndex]) scrollToCurrentRecord();
		return () => {};
	});
</script>

<div class="container">
	<div class="file-table">
		<div class="table-header table-row">
			<span># Registro</span>
		</div>
		{#each $records as record, i}
			<button
				use:inview
				oninview_change={(event) => (isInView[i] = event.detail.inView)}
				bind:this={recordButtons[i]}
				class:current-record={$currentRecordIndex === i}
				type="button"
				class="table-row"
				onclick={() => selectRecord(i)}
			>
				<span class="row-index">{i + 1}</span>
				<pre>{decoder.decode(record)}</pre>
			</button>
		{/each}
	</div>
</div>

<style>
	.container {
		overflow: auto;
		background-color: var(--color-bg);
		border-radius: var(--border-radius-2);
		padding: 2px;
		padding-right: 7px;
		max-height: 550px;
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
		height: 3rem;
		font-size: large;
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
		cursor: pointer;
		background-color: transparent;
		border: none;
		color: var(--color-text);
		white-space: nowrap;
	}
</style>
