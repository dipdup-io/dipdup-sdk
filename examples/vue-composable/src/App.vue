<template>
  <div id="app">
    <div class="container">
      <div class="column is-half is-offset-one-quarter">
        <div class="card p-5">
          <b-field label="Contract address">
            <b-input v-model="contract"></b-input>
          </b-field>
          <div class="is-flex is-justify-content-space-between">
            <div class="buttons mb-0">
              <b-button class="is-primary" @click="subscribe(contract)">Subscribe</b-button>
              <b-button @click="unsubscribe()">Unsubscribe</b-button>
            </div>
            <b-taglist class="mb-0">
              <b-tag v-if="subscribed" type="is-primary is-light" size="is-medium">Subscribed</b-tag>
            </b-taglist>
          </div>
        </div>
      </div>
      <div class="column is-half is-offset-one-quarter">
        <b-notification :type="getType(tx.status)" :closable="false" v-for="tx in sortedTxs" :key="tx.hash">
          {{ new Date(tx.created_at * 1000) }}
          {{ tx.hash }}
          {{ tx.status }}
        </b-notification>
      </div>
    </div>
  </div>
</template>

<script>
import useMempool from './mempool';
import { ref, computed } from '@vue/composition-api';

export default {
  name: 'App',
  setup() {
    const { subscription, transactions, subscribe, unsubscribe, subscribed } = useMempool();
    const contract = ref('KT1X1LgNkQShpF9nRLYw3Dgdy4qp38MX617z');

    const getType = function(status) {
      return {
        refused: 'is-danger is-light',
        branch_refused: 'is-danger is-light',
        expired: 'is-warning is-light',
        in_chain: 'is-success is-light',
      }[status]
    }

    const sortedTxs = computed(() => {
      return transactions.value.sort((a, b) => {
        return b.created_at - a.created_at;
      });
    });

    return {
      subscription,
      sortedTxs,
      subscribe,
      unsubscribe,
      subscribed,
      contract,
      getType
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
