<script>
  import { user } from "../stores.js";
  export let displayName;
  export let photoURL;
</script>

<h3>Hi {displayName}!</h3>

<img src={photoURL} width="100" alt="user avatar" />
<p>Your userID is {$user.uid}</p>
<p>Your Email address is {$user.email}</p>
