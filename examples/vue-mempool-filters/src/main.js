import Vue from 'vue'
import App from './App.vue'

Vue.use(VueApollo);

/*eslint no-unexpected-multiline: "off"*/
(async () => {
  return new Vue({
    render: h => h(App)
  }).$mount('#app');
})();
