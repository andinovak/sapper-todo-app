<script>
  import AppButton from "../AppButton.svelte";

  export let data, name, shape, updateElement, add;
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    min-width: 300px;
    margin: 2rem;
  }
</style>

<div class="form">

  <label for="zdog-shape">Name</label>
  <input id="zdog-name" bind:value={name} />

  <label for="zdog-color">Colour</label>
  <input
    on:change={() => {
      updateElement();
    }}
    id="zdog-color"
    type="color"
    name="color"
    bind:value={data.color} />

  <label for="zdog-shape">Shape</label>
  <select id="zdog-shape" bind:value={shape}>
    <option value="Rect">Rect</option>
  </select>

  <label for="zdog-stroke">Stroke</label>
  <input id="zdog-stroke" type="number" bind:value={data.stroke} min="1" />
  <input
    on:change={() => {
      updateElement();
    }}
    type="range"
    bind:value={data.stroke}
    min="1"
    max="10" />

  <label for="zdog-height">Height</label>
  <input id="zdog-height" type="number" bind:value={data.height} min="1" />
  <input
    on:change={() => {
      updateElement();
    }}
    type="range"
    bind:value={data.height}
    min="1"
    max="900" />

  <label for="zdog-width">Width</label>
  <input id="zdog-width" type="number" bind:value={data.width} min="1" />
  <input
    on:change={() => {
      updateElement();
    }}
    type="range"
    bind:value={data.width}
    min="1"
    max="900" />
  <AppButton on:click={add}>New Shape</AppButton>
</div>
