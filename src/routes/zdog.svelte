<script>
  import AppButton from "../components/AppButton.svelte";
  import ZdogList from "../components/zdog/ZdogList.svelte";
  import ZdogControls from "../components/zdog/ZdogControls.svelte";
  import { onMount } from "svelte";
  import Zdog from "zdog";

  let illo, DEFAULT;
  $: elements = {};
  $: keys = Object.keys(elements);

  // Adjustable properties
  $: data = {};

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
    if (name in elements) {
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
    margin: 0 auto;
    display: block;
  }
  .controls {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>

<h1>Zdog GUI</h1>
<canvas class="zdog-canvas" width="600" height="400" />
<div class="controls">
  <ZdogControls {data} {name} {shape} {updateElement} {add} />
  <ZdogList {keys} {name} {selectElement} {removeElement} />
</div>
