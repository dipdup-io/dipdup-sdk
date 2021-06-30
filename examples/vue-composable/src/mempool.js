import { computed, ref, onBeforeUnmount } from '@vue/composition-api';
import { createClient, everything } from '@dipdup/mempool';

export default function useMempool() {
    const client = createClient({
        subscription: {
            url: "wss://api.dipdup.net/mempool/graphql"
        }
    });

    const transactions = ref([]);
    const subscription = ref({});

    const subscribe = function (contract) {
        unsubscribe();

        const now = parseInt(new Date().getTime() / 1000) - 3600;

        subscription.value = client.chain.subscription
            .mempool_transaction({
                where: { 
                    destination: { _eq: contract },
                    created_at: { _gt: now }
                }
            })
            .get({ ...everything })
            .subscribe({
                next: data => data.forEach(tx => {
                    const item = transactions.value.find(it => it.hash === tx.hash);
                    if (item) {
                        Object.assign(item, tx);
                    } else {
                        transactions.value.push(tx);
                    }
                })
            })
    };

    const unsubscribe = function() {
        if (subscribed && subscription.value?.unsubscribe) {
            subscription.value.unsubscribe();
        }
    };

    const subscribed = computed(() => {
        return subscription.value?.closed === false;
    });

    onBeforeUnmount(() => {
        client.wsClient?.unsubscribeAll();
        client.wsClient?.close();
    });

    return {
        subscription,
        transactions,
        subscribe,
        unsubscribe,    
        subscribed
    }
}