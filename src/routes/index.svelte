<script>
  import Todos from "../components/Todos.svelte";
  import { user } from "../stores.js";
</script>

<style>
  :global(:root) {
    --theme-primary: rgb(253, 148, 62);
    --theme-secondary: rgb(62, 199, 253);
    --ui-warn: rgb(255, 85, 73);

    --ui-light-grey: rgb(192, 191, 191);
    --ui-dark-grey: rgb(128, 128, 128);
  }
  :global(::selection) {
    background: var(--theme-primary);
    color: white;
  }

  :global(h1, h2, h3) {
    letter-spacing: 2px;
  }
  :global(h1) {
    font-size: 3rem;
  }
  :global(h2) {
    font-size: 2.5rem;
  }
  :global(h3) {
    font-size: 1.5rem;
  }
  :global(span, p) {
    font-size: 1.25rem;
  }
  @media only screen and (max-width: 600px) {
    :global(h1, h2, h3) {
      letter-spacing: 1px;
    }
    :global(h1) {
      font-size: 1.5rem;
    }
    :global(h2) {
      font-size: 1rem;
    }
    :global(h3) {
      font-size: 0.875rem;
    }
    :global(span, p) {
      font-size: 0.75rem;
    }
  }

  h1 {
    color: purple;
    margin: 0 auto;
    text-align: center;
  }
  h2 {
    margin: 0.5rem;
  }
</style>

<svelte:head>
  <title>💯Svelte Todos💯</title>
</svelte:head>

{#if $user}
  <h1>🔥 Hello {$user.displayName}! 🔥</h1>
  <h2>Here are your Todos:</h2>
  <Todos uid={$user.uid} />
{:else}
  <p>Log in to see your Todos</p>
{/if}
