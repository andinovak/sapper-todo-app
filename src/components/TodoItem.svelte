<script>
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  import IconButton from "./IconButton.svelte";

  const dispatch = createEventDispatcher();

  function remove() {
    dispatch("remove", { id });
  }

  function toggleStatus() {
    let newStatus = !complete;
    dispatch("toggle", {
      id,
      newStatus
    });
  }

  export let id; // document ID
  export let text;
  export let complete;
  export let even;
</script>

<style>
  .complete {
    text-decoration: line-through;
    color: green;
  }

  span {
    margin: 1rem 0.5rem;
  }
  @media only screen and (max-width: 600px) {
    span {
      margin: 0.5rem;
    }
  }
  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li.even {
    background: rgb(185, 185, 185);
  }
</style>

<li in:fly={{ x: 900, duration: 500 }} class:even>
  <span class:complete>{text}</span>

  <span>
    {#if complete}
      <IconButton dark={!even} on:click={toggleStatus}>✔️</IconButton>
    {:else}
      <IconButton dark={!even} on:click={toggleStatus}>❌</IconButton>
    {/if}
    <IconButton warn on:click={remove}>🗑</IconButton>
  </span>
</li>
