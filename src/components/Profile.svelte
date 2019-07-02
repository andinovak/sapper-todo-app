<script>
  import { user } from "../stores.js";
</script>

<h3>Hi {$user.displayName}!</h3>

<img src={$user.photoURL} width="100" alt="user avatar" />
<p>Your userID is {$user.uid}</p>
<p>Your Email address is {$user.email}</p>
