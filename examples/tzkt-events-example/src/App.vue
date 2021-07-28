<template>
  <div id="app">
    <div class="container">
      <div class="column is-half is-offset-one-quarter">
        <div class="card p-5">
          <div class="is-flex is-justify-content-space-between">
            <div class="buttons mb-0">
              <b-button class="is-primary" @click="subscribeToHead()"
                >Subscribe</b-button
              >
              <b-button @click="unsubscribeFromHead()">Unsubscribe</b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-half is-offset-one-quarter">
        {{ response }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { Client } from "@dipdup/tzkt-events";

export default {
  name: "App",
  setup() {
    let response = ref({});
    let client = new Client({
      url: "https://api.florencenet.tzkt.io/v1/events",
      lazy: true,
    });

    let observer = null;
    const subscribeToHead = async function () {
      observer = client.head().subscribe({
        next: (x) => {
          console.log(x);
          response.value = x;
        },
      });
    };

    const unsubscribeFromHead = async function () {
      observer.unsubscribe();
    };

    return {
      subscribeToHead,
      unsubscribeFromHead,
      response,
    };
  },
};
</script>
