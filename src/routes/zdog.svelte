<script>
  import ZdogList from "../components/zdog/ZdogList.svelte";
  import ZdogControls from "../components/zdog/ZdogControls.svelte";
  import { onMount } from "svelte";
  import Zdog from "zdog";
  import {
    zdogFormData as data,
    zdogCanvas as illo,
    currentChild,
    nameList
  } from "../stores.js";

  let error = "";
  onMount(() => {
    window.Zdog = Zdog;
    illo.set(
      new Zdog.Illustration({
        element: `.zdog-canvas`,
        dragRotate: true
      })
    );
    update();
    add();
  });

  function update() {
    $illo.updateRenderGraph();
    window.requestAnimationFrame(update);
  }

  function add(parent, type = "Rect") {
    if ($nameList.has($data.name)) {
      error = `Name ${$data.name} already exists in canvas`;
    } else {
      let newElement;

      if (type === "Rect") {
        newElement = new Zdog.Rect({
          addTo: parent,
          ...$data
        });
      } else if (type === "Ellipse") {
        newElement = new Zdog.Ellipse({
          addTo: parent,
          ...$data
        });
      } else {
        newElement = new Zdog.Shape({
          addTo: parent,
          ...$data
        });
      }

      parent.addChild(newElement);
      $illo.updateRenderGraph();
      newElement.name = `${$data.name}`;
      newElement.shape = "Rect";
      currentChild.set(newElement);
      illo.set($illo);
      $nameList.add(`${$data.name}`);
    }
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
  .error {
    color: var(--ui-warn);
  }
</style>

<h1>Zdog GUI</h1>
{#if error.length}
  <p class="error">{error}</p>
{/if}
<canvas class="zdog-canvas" width="600" height="400" />
<div class="controls">
  <ZdogControls />
  <ZdogList {add} />
</div>
