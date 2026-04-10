<script>
	let { children, secondary = false, danger = false, ...others } = $props();
</script>

<button class={[{ secondary }, { danger }]} {...others}>
	{@render children()}
</button>

<style>
	button {
		position: relative;
		font: 600 14pt var(--font-mono);
		background-color: transparent;
		color: var(--color-text);
		border-radius: var(--border-radius-pill);
		border: 2px solid var(--color-theme-1);
		padding: .5rem .8rem;
		cursor: pointer;
		transition:
			background-color 300ms,
			color 300ms,
			outline 50ms,
			outline-offset 150ms linear;
	}
	button:hover,
	button:focus {
		background-color: var(--color-theme-1);
		outline: 1rem solid var(--color-theme-1);
		outline-offset: -.5rem;
		color: var(--color-bg-2);
	}
	button:active {
		transition: none;
		outline-offset: -.75rem;
	}

	/* SECONDARY */
	button.secondary {
		border: 2px solid var(--color-theme-2);
	}
	button.secondary:hover,
	button.secondary:focus {
		background: var(--color-theme-2);
		outline: 1rem solid var(--color-theme-2);
	}

	/* DANGER */
	button.danger {
		border: 2px solid var(--color-error);
	}
	button.danger:hover,
	button.danger:focus {
		background: var(--color-error);
		outline: 1rem solid var(--color-error);
	}
</style>
