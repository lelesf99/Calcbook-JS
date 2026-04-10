<script>
	let { children, name = '', id = '', checked = $bindable(false)} = $props();
</script>

<label>
	<input type="checkbox" {name} {id} bind:checked={checked} />
	{@render children()}

	<svg
		class={[{ checked }]}
		width="50"
		height="50"
		viewBox="0 0 50 50"
		fill="none"
		stroke-linecap="round"
		stroke-width="6"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M 10 25
               l 10,17
		       l 20,-25"
		/>
	</svg>
</label>

<style>
	input[type='checkbox'] {
		box-sizing: border-box;
		width: 20px;
		height: 20px;
		border: 2px solid var(--color-theme-2);
		appearance: none;
		background-color: transparent;
		outline: none;
		transition: outline 0.1s;
		border-radius: var(--border-radius-pill);
		cursor: pointer;
		transition: background-color 200ms;
	}

	input[type='checkbox']:focus-visible {
		outline: 2px solid var(--color-theme-1);
		outline-offset: 2px;
	}
	@media (hover: hover) {
		input[type='checkbox']:not(:disabled):hover {
			outline: 2px solid var(--color-theme-1);
			outline-offset: 2px;
		}
	}

	label {
		position: relative;
		display: flex;
		align-items: center;
		gap: .5rem;
	}
	label:first-child{
		margin-left: .5rem;
	}
	svg {
		pointer-events: none;
		position: absolute;
		top: -10px;
		left: 0px;
		width: 2rem;
		height: 2rem;
	}
	svg path {
		stroke-dasharray: 64; /* Use the actual path length here, e.g., via JS */
		stroke-dashoffset: 64;
		stroke-opacity: 0;
		transition:
			stroke-dashoffset 200ms ease-out,
			stroke-opacity 100ms;
	}
	svg.checked path {
		stroke-dashoffset: 0;
		stroke-opacity: 1;
		stroke: var(--color-theme-1);
	}
</style>
