<script>
  import AppButton from "../AppButton.svelte";
  import Zdog from "zdog";
  import {
    zdogFormData as data,
    currentChild,
    zdogCanvas as illo,
    nameList
  } from "../../stores.js";
  const TAU = Zdog.TAU;
  function updateElement(key) {
    $currentChild[key] = $data[key];
    $currentChild.updatePath();
  }
  function twoDp(val) {
    return Math.trunc(val * 100) / 100;
  }
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    min-width: 300px;
    margin: 0.5rem;
  }
</style>

<div class="form">
  <label for="zdog-shape">Name</label>
  <input id="zdog-name" bind:value={$data.name} />

  {#if $data.name == $currentChild.name}
    <label for="zdog-fill">Fill</label>
    <input
      on:change={() => {
        updateElement('fill');
      }}
      id="zdog-fill"
      type="checkbox"
      bind:checked={$data.fill} />

    {#if $data.fill || $data.stroke}
      <label for="zdog-color">Colour</label>
      <input
        on:change={() => {
          updateElement('color');
        }}
        id="zdog-color"
        type="color"
        name="color"
        bind:value={$data.color} />
    {/if}

    <label for="zdog-shape">Shape</label>
    <select id="zdog-shape" bind:value={$data.shape}>
      <option value="Rect">Rect</option>
    </select>

    <label for="zdog-stroke">Stroke: {$data.stroke}</label>
    <input
      id="zdog-stroke"
      on:change={() => {
        updateElement('stroke');
      }}
      type="range"
      bind:value={$data.stroke}
      min="0"
      max="10"
      step="0.1" />

    <label for="zdog-height">Height: {$data.height}</label>
    <input
      id="zdog-height"
      on:change={() => {
        updateElement('height');
      }}
      type="range"
      bind:value={$data.height}
      min="1"
      max="900" />

    <label for="zdog-width">Width: {$data.width}</label>
    <input
      id="zdog-width"
      on:change={() => {
        updateElement('width');
      }}
      type="range"
      bind:value={$data.width}
      min="1"
      max="900" />
    <h3>Translate X, Y, Z</h3>

    {#each ['x', 'y', 'z'] as dir}
      <input
        on:change={() => {
          updateElement('translate');
        }}
        type="range"
        bind:value={$data.translate[dir]}
        min="-300"
        max="300" />
    {/each}

    <h3>Rotate X, Y, Z</h3>
    {#each ['x', 'y', 'z'] as dir}
      <input
        on:change={() => {
          updateElement('rotate');
        }}
        type="range"
        bind:value={$data.rotate[dir]}
        min={twoDp(-TAU / 2)}
        max={twoDp(TAU / 2)}
        step={twoDp(TAU / 50)} />
    {/each}
  {:else}
    <p>Select an existing element or click ✖️ to create.</p>
  {/if}
</div>
