<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // Dispatch click event so can be consumed with on:click directive
  function click() {
    dispatch("click");
  }

  // Export prop for secondary color theme
  export let secondary;
</script>

<style>
  button {
    border: none;
    background: var(--theme-primary);
    letter-spacing: 2px;
    text-transform: capitalize;
    font-weight: bold;
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 0.3rem;
    cursor: pointer;
    margin: 0.5rem 0;

    position: relative;
  }
  button.secondary {
    background: var(--theme-secondary);
  }
  button:hover:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    border-radius: inherit;
    background: rgba(255, 255, 255, 0.3);
    pointer-events: none;
  }
</style>

<button class:secondary on:click={click}>
  <slot />
</button>
