<template>
  <div id="app">
    <div v-if="transactions && transactions.length > 0">
      <div v-for="tx in transactions" :key="tx.hash">
        {{ tx.source }}
        {{ tx.parameters.entrypoint }}
      </div>
    </div>
  </div>
</template>

<script>
import { MempoolClient } from '@dipdup/mempool';

export default {
  name: 'App',
  apollo: {
    transactions: {
      query: MempoolClient.buildContractCallsQuery('KT1K4EwTpbvYN9agJdjpyJm4ZZdhpUNKB3F6'),
      pollInterval: 1000,
      update: data => data.mempool_transaction
    }
  },
  data: () => ({
    /*eslint no-unused-labels: "off"*/
    transactions: []
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
