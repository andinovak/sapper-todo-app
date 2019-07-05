<script>
  export let addTo, width, height, stroke, color;
</script>

<div>
  <!-- <label for="zdog-shape">Shape</label>
  <select id="zdog-shape" bind:value={color}>
    <option value="Blue">Rect</option>
  </select> -->

  <label for="zdog-stroke">Stroke</label>
  <input id="zdog-stroke" type="number" bind:value={stroke} min="1" />

  <label for="zdog-height">Height</label>
  <input id="zdog-height" type="number" bind:value={height} min="1" />

  <label for="zdog-width">Width</label>
  <input id="zdog-width" type="number" bind:value={width} min="1" />
</div>
