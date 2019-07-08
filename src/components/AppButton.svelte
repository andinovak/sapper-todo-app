<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // Dispatch click event so can be consumed with on:click directive
  function click() {
    dispatch("click");
  }

  // Export prop for secondary color theme
  export let secondary = false,
    active = false,
    warn = false,
    disabled,
    hidden;
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
    margin: 0.5rem;
    transition: all 0.4s ease;
    position: relative;
  }
  button.secondary {
    background: var(--theme-secondary);
  }
  button.warn {
    background: var(--ui-warn);
  }
  button[disabled] {
    background: var(--ui-dark-grey);
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
  button.active {
    outline: 3px solid var(--theme-primary);
    outline-offset: 2px;
  }
</style>

<button
  class={warn ? `warn` : secondary ? `secondary` : active ? `active` : ``}
  {hidden}
  {disabled}
  on:click={click}>
  <slot />
</button>
