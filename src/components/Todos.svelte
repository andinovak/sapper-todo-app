<script>
  import { onMount } from "svelte";

  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import { db } from "../firebase";

  import TodoItem from "./TodoItem.svelte";
  import AppInput from "./AppInput.svelte";
  import AppButton from "./AppButton.svelte";
  // User ID passed from parent
  export let uid;

  // Form Text
  const initialText = "I need to...";
  let text = initialText;

  // Query requires an index
  const query = db
    .collection("todos")
    .where("uid", "==", uid)
    .orderBy("created");

  const todos = collectionData(query, "id").pipe(startWith([]));

  function add() {
    db.collection("todos").add({
      uid,
      text,
      complete: false,
      created: Date.now()
    });
    text = initialText;
  }

  function updateStatus(event) {
    const { id, newStatus } = event.detail;
    db.collection("todos")
      .doc(id)
      .update({ complete: newStatus });
  }

  function removeItem(event) {
    const { id } = event.detail;
    db.collection("todos")
      .doc(id)
      .delete();
  }
</script>

<style>
  ul {
    padding: 0;
  }
</style>

<ul>
  {#each $todos as todo, i}
    <TodoItem
      even={i % 2 == 0}
      {...todo}
      on:remove={removeItem}
      on:toggle={updateStatus} />
  {/each}
</ul>

<AppInput secondary bind:text />

<AppButton on:click={add}>📋 Add Task</AppButton>
