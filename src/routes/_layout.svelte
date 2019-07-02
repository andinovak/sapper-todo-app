<script>
  import Nav from "../components/Nav.svelte";
  import { onMount } from "svelte";
  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;

    margin: 0 auto;
    box-sizing: border-box;
  }
  @media only screen and (max-width: 600px) {
    main {
      padding: 1rem 0;
    }
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
