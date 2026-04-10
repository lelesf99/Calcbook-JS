<script>
	let { options, selected = $bindable() } = $props();
</script>

{#each options as option}
	<label for={option.name}><input type="radio" name={option.name} value={option.name} id={`option${option.name}`} bind:group={selected} /> {option.label}</label>
{/each}

<style>
	label {
		white-space: nowrap;
	}
		label:first-child{
		margin-left: .5rem;
	}

	input[type='radio'] {
		appearance: none;
		-webkit-appearance: none;
		width: 20px;
		height: 20px;
		border: 2px solid var(--color-theme-2);
		border-radius: var(--border-radius-circle);
		display: inline-grid;
		place-content: center;
		cursor: pointer;
	}

	input[type='radio']::before {
		content: '';
		padding: 2px;
		width: 8px;
		height: 8px;
		border-radius: var(--border-radius-circle);
		box-shadow: inset 10px 10px var(--color-theme-1);
		transform: scale(0);
		transition: 100ms transform ease-in-out;
	}

	input[type='radio']:checked::before {
		transform: scale(1);
	}

	input[type='radio']:focus {
		outline: 2px solid var(--color-theme-1);
        outline-offset: 2px;
	}
</style>    
