<script>
	import Header from '$lib/components/Header.svelte';
	import './layout.css';
	import { setLucideProps } from '@lucide/svelte';

	let { children } = $props();
	setLucideProps({
		size: 16,
		strokeWidth: 3
	});
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex-grow: 0;
		height: 100vh;
		display: grid;
		grid-template-areas: 'copybook' 'arquivo';
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 2fr;
		gap: 1rem;
		padding: 1rem 1rem 0 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
