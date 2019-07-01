<script>
  import Todos from "../components/Todos.svelte";
  import { user } from "../stores.js";
</script>

<style>
  h1 {
    color: purple;
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
