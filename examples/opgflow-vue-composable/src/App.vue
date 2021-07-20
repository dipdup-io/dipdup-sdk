<template>
  <div id="app">
    <div class="container">
      <div class="column is-half is-offset-one-quarter">
        <div class="card p-5">
          <div class="is-flex is-justify-content-space-between">
            <div class="buttons mb-0">
              <b-button class="is-primary" @click="connectWallet()">Connect wallet</b-button>
              <b-button @click="sendValidTx()">Valid tx</b-button>
            </div>
            <b-taglist class="mb-0">
              <b-tag v-if="subscribed" type="is-primary is-light" size="is-medium">Subscribed</b-tag>
            </b-taglist>
          </div>
        </div>
      </div>
      <div class="column is-half is-offset-one-quarter">
        <b-notification :type="getType(item.status)" :closable="false" v-for="item in sortedItems" :key="item.hash">
          {{ new Date(item.created_at * 1000) }}
          {{ item.hash }}
          {{ item.status }}
        </b-notification>
      </div>
    </div>
  </div>
</template>

<script>
import useOPGFlow from './opgflow';
import useBeacon from './wallet';
import { ref, computed } from '@vue/composition-api';

export default {
  name: 'App',
  setup() {
    const { opgList, opgFlow, subscribe, subscribed } = useOPGFlow();
    const { Tezos, connect, wallet } = useBeacon();
    const account = ref('');

    const getType = function(status) {
      return {
        refused: 'is-danger is-light',
        branch_refused: 'is-danger is-light',
        expired: 'is-warning is-light',
        in_chain: 'is-success is-light',
      }[status]
    }

    const sortedItems = computed(() => {
      return opgList.value.sort((a, b) => {
        return b.created_at - a.created_at;
      });
    });

    const connectWallet = async function() {
      account.value = await connect();
      await subscribe(account.value);
      Tezos.setWalletProvider(wallet);
    }

    const sendValidTx = async function() {
      const counter = await Tezos.wallet.at("KT1ECSt8FzxAtHxoxi4xN1JwkKUbBe4TS9kz"); 
      const op = await counter.methods.increment(5).send();
      console.log(op);
      await opgFlow.addOPG(op.opHash, 'increment by 5');
    }

    return {
      sortedItems,
      connectWallet,
      sendValidTx,
      subscribed,
      account,
      getType
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
