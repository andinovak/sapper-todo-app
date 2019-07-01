<script>
  export let name;
  import Login from "../components/Login.svelte";
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<svelte:head>
  <title>🔥 Svelte 💯</title>
</svelte:head>

<h1>🔥 Hello {name}! 🔥</h1>
<Login />
