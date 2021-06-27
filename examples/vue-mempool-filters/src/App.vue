<template>
  <div id="app">
    <div>
      <div v-for="op in operations" :key="op.hash">
        {{ op.hash }}
        {{ op.kind }}
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from '@dipdup/mempool';

export default {
  name: 'App',
  data: () => ({
    /*eslint no-unused-labels: "off"*/
    operations: [],
    client: null
  }),
  created: function() {
    this.client = createClient();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
