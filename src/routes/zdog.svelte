<script>
  import AppButton from "../components/AppButton.svelte";
  import { zdogData } from "../stores.js";
  import ZdogElement from "../components/zdog/ZdogElement.svelte";

  let illo = new Zdog.Illustration({
    element: "canvas"
  });

  const defaultData = {
    addTo: illo,
    width: 120,
    height: 80,
    stroke: 20,
    color: "#E62"
  };
  let data = defaultData;

  function update() {
    illo.updateRenderGraph();
    window.requestAnimationFrame(update);
  }

  function add(data) {
    let shape = new Zdog.Rect({
      ...data,
      addTo: illo
    });
    zdogData.add(shape);
    illo.updateRenderGraph(shape);

    data = defaultData;
  }
</script>

<style>
  canvas {
    cursor: move;
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>

<ZdogElement {...data} />
<AppButton on:click={add}>Add Shape</AppButton>
<canvas width="600" height="400" />
