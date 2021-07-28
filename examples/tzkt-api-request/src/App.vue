<template>
  <div id="app">
    <div class="container">
      <div class="column is-half is-offset-one-quarter">
        <div class="card p-5">
          <div class="is-flex is-justify-content-space-between">
            <div class="buttons mb-0">
              <b-button class="is-primary" @click="sendRequest()">Send request</b-button>
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
import { ref } from '@vue/composition-api';
import { AccountsService } from '@dipdup/tzkt-api'

export default {
  name: 'App',
  setup() {
    let response = ref({})
    const sendRequest = async function() {
      response.value = await AccountsService.accountsGet({
        kind: {
            eq: 'smart_contract'
        },
        limit:10
      })
    }

    return {
      sendRequest,
      response
    }
  }
}
</script>
