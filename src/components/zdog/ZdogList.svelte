<script>
  import AppButton from "../AppButton.svelte";

  export let keys, name, selectElement, removeElement;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    margin: 2rem;
  }
</style>

<div class="container">

  <h2>Shapes:</h2>
  <ul>
    {#each keys as key, i}
      <li>
        <AppButton
          secondary={name == key}
          on:click={() => {
            selectElement(key);
          }}>
           {key}
        </AppButton>

        <!-- <AppButton
        hidden={!(name == key)}
        secondary
        on:click={() => {
          updateElement(key);
        }}>
        ♻️
      </AppButton> -->

        <AppButton
          warn
          hidden={!(name == key)}
          on:click={() => {
            removeElement(key);
          }}>
          🗑
        </AppButton>
      </li>
    {/each}
  </ul>
</div>
