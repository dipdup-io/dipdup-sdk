import {
    ApolloClient,
    ApolloClientOptions,
    InMemoryCache,
    NormalizedCacheObject,
    HttpLink,
    split,
    gql,
    DocumentNode
} from '@apollo/client/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { persistCache, LocalForageWrapper } from 'apollo3-cache-persist';
import { 
    MEMPOOL_TRANSACTION_DATA, 
    MEMPOOL_ORIGINATION_DATA, 
    MEMPOOL_DELEGATION_DATA, 
    MEMPOOL_REVEAL_DATA, 
    MEMPOOL_ENDORSEMENT_DATA 
} from './fragments';
import * as localForage from "localforage";
import * as defaults from './defaults.json';


export enum OperationType {
    ORIGINATION = 'origination',
    DELEGATION = 'delegation',
    REVEAL = 'reveal',
    TRANSACTION = 'transaction',
    ACTIVATE_ACCOUNT = 'activate_account',
    ENDORSEMENT = 'endorsement',
    NONCE_REVELATION = 'nonce_revelation',
    DOUBLE_ENDORSING = 'double_endorsing',
    DOUBLE_BAKING = 'double_baking',
    PROPOSAL = 'proposal',
    BALLOT = 'ballot',
}


export class MempoolClient extends ApolloClient<NormalizedCacheObject> {

    constructor(public readonly network: string, options: ApolloClientOptions<NormalizedCacheObject>) {
        super(options);
    }

    public static async create(network: string, httpEndpoint: string, wsEndpoint: string, persist: boolean = false): Promise<MempoolClient> {
        const wsLink = new WebSocketLink({
            uri: wsEndpoint,
            options: {
                reconnect: true
            }
        });
        const httpLink = new HttpLink({
            uri: httpEndpoint
        });
        const splitLink = split(
            ({ query }) => {
                const definition = getMainDefinition(query);
                return (
                    definition.kind === 'OperationDefinition' &&
                    definition.operation === 'subscription'
                );
            },
            wsLink,
            httpLink
        );
        const cache = new InMemoryCache({});

        if (persist) {
            await persistCache({
                cache,
                storage: new LocalForageWrapper(localForage),
            });
        }

        return new MempoolClient(
            network,
            {
                link: splitLink,
                cache: cache,
                connectToDevTools: true
            }
        );
    }

    public static async default(network: string, persist: boolean = false): Promise<MempoolClient> {
        if (network === "mainnet") {
            return MempoolClient.create(
                network,
                defaults.mainnet.httpEndpoint,
                defaults.mainnet.wsEndpoint,
                persist
            );
        }
        throw Error(`Unsupported network ${network}`);
    }

    public static buildAccountOperationsQuery(account: string, types: OperationType[]) : DocumentNode {
        let subqueries = [];
        let fragments = [];

        for (var type in types) {
            if (type === OperationType.TRANSACTION) {
                subqueries.push(gql`mempool_transaction (where: {source: {_eq: "${account}"}}) {
                    ...MempoolTransactionData
                }`);
                fragments.push(MEMPOOL_TRANSACTION_DATA);
            } else if (type === OperationType.ORIGINATION) {
                subqueries.push(gql`mempool_origination (where: {source: {_eq: "${account}"}}) {
                    ...MempoolOriginationData
                }`);
                fragments.push(MEMPOOL_ORIGINATION_DATA);
            } else if (type === OperationType.DELEGATION) {
                subqueries.push(gql`mempool_delegation (where: {source: {_eq: "${account}"}}) {
                    ...MempoolDelegationData
                }`);
                fragments.push(MEMPOOL_DELEGATION_DATA);
            } else if (type === OperationType.REVEAL) {
                subqueries.push(gql`mempool_reveal (where: {source: {_eq: "${account}"}}) {
                    ...MempoolRevealData
                }`);
                fragments.push(MEMPOOL_REVEAL_DATA);
            } else if (type === OperationType.ENDORSEMENT) {
                subqueries.push(gql`mempool_endorsement (where: {baker: {_eq: "${account}"}}) {
                    ...MempoolEndorsementData
                }`);
                fragments.push(MEMPOOL_ENDORSEMENT_DATA);
            }
        }

        return gql`
            ${fragments.join('\n')}
            query AccountOperationsQuery {
                ${subqueries.join('\n')}
            }`
    }

    public static buildContractCallsQuery(contract: string) : DocumentNode {
        return gql`
            ${MEMPOOL_TRANSACTION_DATA}
            query ContractCallsQuery {
                mempool_transaction (where: {destination: {_eq: "${contract}"}}) {
                    ...MempoolTransactionData
                }
            }`
    }
}