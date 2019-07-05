<script>
  import AppButton from "../components/AppButton.svelte";
  import IconButton from "../components/IconButton.svelte";
  import { onMount } from "svelte";
  import Zdog from "zdog";

  let illo, DEFAULT;
  $: elements = {};
  $: keys = Object.keys(elements);

  // Adjustable properties
  $: data = {};

  //   let stroke, height, width, color, translate, rotate;
  let name = `New Element`;
  let shape = `Rect`;

  onMount(() => {
    window.Zdog = Zdog;
    illo = new Zdog.Illustration({
      element: `.zdog-canvas`,
      dragRotate: true
    });
    update();
    DEFAULT = {
      addTo: illo,
      width: 120,
      height: 80,
      stroke: 20,
      color: `#FFF`
    };
    data = { ...DEFAULT };

    add();
  });

  function update() {
    illo.updateRenderGraph();
    window.requestAnimationFrame(update);
  }

  function add() {
    if (`${name}` in elements) {
      alert("Name is already taken");
    } else {
      let reference = new Zdog.Rect({ ...data });
      illo.updateRenderGraph(reference);

      let element = {};
      element[`${name}`] = {
        shape: shape,
        data: { ...data },
        reference: reference
      };

      // Update elements with new object
      elements = { ...elements, ...element };
    }
  }

  function selectElement(key) {
    data = { ...elements[key].data };
    shape = elements[key].shape;
    name = key;
  }

  function removeElement(key) {
    illo.removeChild(elements[key].reference);
    delete elements[key];
    elements = { ...elements };
  }

  function updateElement() {
    elements[name].reference.remove();

    elements[name] = {
      shape: shape,
      data: data,
      reference: new Zdog.Rect({ ...data })
    };
    illo.updateRenderGraph(elements[name].reference);
  }
</script>

<style>
  canvas {
    cursor: move;
    background: #333;
  }
  .form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }
</style>

<h1>Zdog GUI</h1>
<canvas class="zdog-canvas" width="600" height="400" />
<div class="form">

  <label for="zdog-shape">Name</label>
  <input id="zdog-name" bind:value={name} placeholder="Name" />

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
</div>
<AppButton on:click={add}>New Shape</AppButton>
<h2>Shapes:</h2>
<ul>
  {#each keys as key, i}
    <li>
      <AppButton
        secondary={name == key}
        on:click={() => {
          selectElement(key);
        }}>
         {key}
      </AppButton>

      <!-- <AppButton
        hidden={!(name == key)}
        secondary
        on:click={() => {
          updateElement(key);
        }}>
        ♻️
      </AppButton> -->

      <AppButton
        warn
        hidden={!(name == key)}
        on:click={() => {
          removeElement(key);
        }}>
        🗑
      </AppButton>
    </li>
  {/each}
</ul>
