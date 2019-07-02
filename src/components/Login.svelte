<script>
  import { user } from "../stores.js";
  import AppButton from "./AppButton.svelte";
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
    <AppButton secondary on:click={() => auth.signOut()}>🚢 Log out</AppButton>
  {:else}
    <AppButton on:click={login}>🌲 Log in</AppButton>
  {/if}
</section>
