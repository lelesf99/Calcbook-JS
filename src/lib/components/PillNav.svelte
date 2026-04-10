<script>
	let { children, gap = '1rem' } = $props();
</script>

<nav style:gap={gap}>{@render children()}</nav>

<style>
	nav {
		display: inline-flex;
		flex-wrap: nowrap;
		align-items: center;
		padding: .4rem;
		outline: 2px solid var(--color-bg-2);
		border-radius: var(--border-radius-pill);
		font-size: 1rem;
	}
</style>
