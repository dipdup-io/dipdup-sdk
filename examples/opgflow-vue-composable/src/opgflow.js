import { computed, ref, onBeforeUnmount } from '@vue/composition-api';
import { createOPGFlow, mergeOPG } from '@dipdup/opgflow';

export default function useOPGFlow() {
    const opgFlow = createOPGFlow("wss://api.dipdup.net/mempool/graphql");
    const opgList = ref([]);

    const update = function(updates) {
        updates.forEach(opg => {
            const item = opgList.value.find(it => it.hash === opg.hash);
            if (item) {
                Object.assign(item, mergeOPG(item, opg));
            } else {
                opgList.value.push(opg);
            }
        })
    };

    const subscription = ref({});

    const subscribe = async function (source) {
        unsubscribe();
        opgList.value.splice(0, opgList.value.length);

        //const now = parseInt(new Date().getTime() / 1000) - 3600;

        subscription.value = opgFlow
            .select(source)
            .subscribe({
                next: update,
                error: console.log
            });
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
        opgFlow.close();
    });

    return {
        subscription,
        opgFlow,
        opgList,
        subscribe,
        unsubscribe,    
        subscribed
    }
}