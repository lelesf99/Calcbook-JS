<script lang="ts">
  import { buffer } from '$lib/stores/editor.store';
  import { unpackComp3, packComp3 } from '$lib/domain/encoding/comp3';
  import { unpackBinaryNumeric, packBinaryNumeric } from '$lib/domain/encoding/binary';

  export let field;

  function read() {
    if (!$buffer) return '';
    const bytes = $buffer.slice(field.offset, field.offset + field.byteLength);

    if (field.usage === 'COMP-3') {
      return unpackComp3(bytes, field.pic?.decimals ?? 0);
    }
    return unpackBinaryNumeric(
      bytes,
      !!field.pic?.signed,
      field.pic?.decimals ?? 0,
      'little'
    );
  }
</script>

<div class="field" style:flex-basis={`calc(${field.byteLength}ch + 3.5rem)`}>
	<input
		{@attach tooltip(tooltipText)}
		placeholder={field.pic?.type === 'NUMERIC'
			? '9'.repeat(field.byteLength)
			: 'X'.repeat(field.byteLength)}
		name={field.name}
		bind:value={fValue}
		oninput={onInput}
		onfocus={showHighlight}
		onblur={hideHighlight}
		maxlength={field.byteLength}
		
		inputmode={field.pic?.type === 'NUMERIC' ? 'decimal' : 'text'}
		autocapitalize="off"
		autocorrect="off"
		spellcheck="false"
		autocomplete="off"
	/>
</div>