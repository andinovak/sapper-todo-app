<script>
  import { fade, fly } from "svelte/transition";

  import { createEventDispatcher } from "svelte";

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
</script>

<style>
  .complete {
    text-decoration: line-through;
    color: green;
  }
  span {
    font-size: 2rem;
    margin: 1rem 2rem;
  }
  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li:nth-child(even) {
    background: rgb(185, 185, 185);
  }
</style>

<li in:fly={{ x: 900, duration: 500 }}>
  <span class:complete> {text} </span>

  <span>
    {#if complete}
      <button on:click={toggleStatus}>✔️</button>
    {:else}
      <button on:click={toggleStatus}>❌</button>
    {/if}
    <button on:click={remove}>🗑</button>
  </span>
</li>
