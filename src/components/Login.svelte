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

<section>
  {#if $user}
    <button on:click={() => auth.signOut()}>Logout</button>
  {:else}
    <button on:click={login}>Signin with Google</button>
  {/if}
</section>
