<script>
  // Export prop for secondary color theme
  export let secondary;

  // Export prop for input text
  export let text = "";
</script>

<style>
  input {
    background: white;
    letter-spacing: 2px;

    border: 4px solid var(--theme-primary);
    color: var(--theme-primary);

    padding: 0.5rem 1.5rem;
    border-radius: 0.3rem;
    display: block;
    margin: 0.5rem 0;
    width: 100%;
    box-sizing: inherit;

    font-size: 1.25rem;
    font-weight: bold;
  }
  input.secondary {
    border: 4px solid var(--theme-secondary);
    color: var(--theme-secondary);
  }
</style>

<input class:secondary bind:value={text} />
