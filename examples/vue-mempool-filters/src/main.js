import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import { MempoolClient } from '@dipdup/mempool'

Vue.use(VueApollo);

/*eslint no-unexpected-multiline: "off"*/
(async () => {
  const defaultClient = await MempoolClient.default('mainnet');
  const apolloProvider = new VueApollo({ defaultClient });

  return new Vue({
    apolloProvider,
    render: h => h(App)
  }).$mount('#app');
})();
