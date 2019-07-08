<script>
  import AppButton from "../AppButton.svelte";
  import {
    zdogFormData as data,
    zdogCanvas as illo,
    currentChild,
    nameList
  } from "../../stores.js";

  export let add;

  function selectElement(element) {
    $currentChild !== element && currentChild.set(element);
    data.set({ ...$currentChild });
  }
  function removeElement(element) {
    $nameList.delete(element.name);
    element.remove();
    illo.set($illo);
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
  }
  ul {
    padding: 0;
    border: 1px solid var(--ui-light-grey);
  }
  li {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
  section {
    display: flex;
    flex-direction: row;
  }
  li ul {
    margin: 0 0.5rem 0 2rem;
  }
</style>

<div class="container">
  <ul>

    {#each ($illo && $illo.children) || [] as element}
      <li>
        <section>
          <AppButton
            active={$data.name == element.name}
            on:click={() => {
              selectElement(element);
            }}>
             {element.name}
          </AppButton>

          <AppButton
            warn
            on:click={() => {
              removeElement(element);
            }}>
            🗑
          </AppButton>
        </section>
        <ul>
          {#each element.children || [] as element}
            <li>
              <section>
                <AppButton
                  active={$data.name == element.name}
                  on:click={() => {
                    selectElement(element);
                  }}>
                   {element.name}
                </AppButton>

                <AppButton
                  warn
                  on:click={() => {
                    removeElement(element);
                  }}>
                  🗑
                </AppButton>
              </section>
            </li>
          {/each}
          <li>
            <section>
              <AppButton
                secondary
                on:click={() => {
                  add(element, 'Rect');
                }}>
                🔷
              </AppButton>
              <AppButton
                secondary
                on:click={() => {
                  add(element, 'Ellipse');
                }}>
                🔵
              </AppButton>
            </section>

          </li>
        </ul>

      </li>
    {/each}
    <li>
      <section>
              <AppButton
                secondary
                on:click={() => {
                  add($illo, 'Rect');
                }}>
                🔷
              </AppButton>
              <AppButton
                secondary
                on:click={() => {
                  add($illo, 'Ellipse');
                }}>
                🔵
              </AppButton>
            </section>
    </li>
  </ul>
</div>
