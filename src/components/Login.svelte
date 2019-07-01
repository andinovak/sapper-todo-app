<script>
  import Profile from "./Profile.svelte";
  import Todos from "./Todos.svelte";

  import { authState } from "rxfire/auth";
  import { auth, db, googleProvider } from "../firebase";

  let user;
  let unsubscribe = authState(auth).subscribe(u => (user = u));
  let login = () => {
    auth.signInWithPopup(googleProvider);
  };
</script>

<section>
  {#if user}
    <Profile {...user} />
    <button on:click={() => auth.signOut()}>Logout</button>
    <Todos uid={user.uid} />
  {:else}
    <button on:click={login}>Signin with Google</button>
  {/if}
</section>
