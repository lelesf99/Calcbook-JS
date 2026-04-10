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

<div class="field">
  <div class="label">
    <b>{field.name}</b>
    <span class="meta">
      [{field.offset}..{field.offset + field.byteLength - 1}]
      {field.pic?.raw} • {field.usage}
    </span>
  </div>

  <input
    value={read()}
    oninput={(e) => {
      if (!$buffer) return;

      let out;
      if (field.usage === 'COMP-3') {
        out = packComp3(
          e.currentTarget.value,
          field.byteLength,
          field.pic?.decimals ?? 0
        );
      } else {
        out = packBinaryNumeric(
          e.currentTarget.value,
          field.byteLength,
          !!field.pic?.signed,
          field.pic?.decimals ?? 0,
          'little'
        );
      }

      $buffer.set(out, field.offset);
    }}
  />
</div>
