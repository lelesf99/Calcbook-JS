<script>
import EditorCopybook from '$lib/components/EditorCopybook.svelte';
import EditorArquivo from '$lib/components/EditorArquivo.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Calcbook JS - Editor de arquivos via copybook" />
</svelte:head>

<section class="copybook-area">
	<EditorCopybook/>
</section>

<section class="arquivo-area">
	<EditorArquivo/>
</section>

<style>
	section {
		height: calc(100vh - 2rem);
		display: flex;
		flex-direction: column;
		min-width: 0;
		padding: 1rem;
		gap: 1rem;
		flex: 0.6;
		background: var(--gradient-bg);
		border-radius: 1rem;
	}
	.copybook-area {
		grid-area: 'copybook';
	}
	.arquivo-area {
		grid-area: 'arquivo';
	}
	
</style>
