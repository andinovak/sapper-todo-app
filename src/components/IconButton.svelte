<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // Dispatch click event so can be consumed with on:click directive
  function click() {
    dispatch("click");
  }

  // Export prop for secondary color theme
  export let dark, warn;
</script>

<style>
  button {
    height: 56px;
    width: 56px;
    text-align: center;

    border: none;
    background: white;
    letter-spacing: 2px;
    text-transform: capitalize;
    font-weight: bold;
    color: white;

    border-radius: 2rem;
    cursor: pointer;
    margin: 0.5rem 0;

    position: relative;
  }

  button.dark {
    background: var(--ui-dark-grey);
  }
  button.warn {
    background: var(--ui-warn);
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
  button.icon {
    border-radius: 1rem;
  }
</style>

<button class={warn ? `warn` : dark ? `dark` : ``} on:click={click}>
  <slot />
</button>
