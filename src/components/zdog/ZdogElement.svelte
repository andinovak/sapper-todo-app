<script>
  export let width, height, stroke, color;
</script>

<div>
  <select bind:value={color}>
    <option value="Red">Shape</option>
    <option value="Blue">Blue</option>
  </select>
  <input type="number" bind:value={stroke} min="1" max="10" />
  <input type="number" bind:value={height} min="1" max="10" />
  <input type="number" bind:value={width} min="1" max="10" />
</div>
