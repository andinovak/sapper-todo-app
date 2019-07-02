<script>
  import { user } from "../stores.js";
  import Profile from "./Profile.svelte";
  import { authState } from "rxfire/auth";
  import { auth, db, googleProvider } from "../firebase";

  let unsubscribe = authState(auth).subscribe(u => user.set(u));
  let login = () => {
    auth.signInWithPopup(googleProvider);
  };
</script>

<style>
  button {
    border: none;
    background: hsl(14, 100%, 62%);
    letter-spacing: 1px;
    text-transform: uppercase;
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 0.3rem;
    cursor: pointer;
  }
  button:hover {
    background: hsl(14, 100%, 69%);
  }
</style>

<section>
  {#if $user}
    <button on:click={() => auth.signOut()}>Logout</button>
  {:else}
    <button on:click={login}>🌲Log in</button>
  {/if}
</section>
