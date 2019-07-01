<script>
  import { user } from "../stores.js";
  import Profile from "../components/Profile.svelte";
</script>

<section>
  {#if $user}
    <Profile {...$user} />
  {:else}
    <p>Log in to see your profile.</p>
  {/if}
</section>
