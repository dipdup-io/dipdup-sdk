import { 
    TransactionOperation, 
    OriginationOperation, 
    DelegateOperation,
    OpKind
} from "@taquito/taquito";
import {
    OperationContentsTransaction,
    OperationContentsOrigination,
    OperationContentsDelegation
} from "@taquito/rpc";
import { 
    ApolloClient,
    InMemoryCache,
    HttpLink,
    split,
    gql
} from '@apollo/client/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

export declare enum Status {
    PENDING = "pending",
    EXPIRED = "expired",
    MEMPOOL_APPLIED = "mempool_applied",
    BRANCH_REFUSED = "branch_refused",
    BRANCH_DEPAYED = "branch_delayed",
    REFUSED = "refused",
    UNPROCESSED = "unprocessed",
    APPLIED = "applied",
    FAILED = "failed",
    BACKTRACKED = "backtracked"
}

export type ManagersOperation = TransactionOperation | OriginationOperation | DelegateOperation;
export type ManagersContent = OperationContentsTransaction | OperationContentsOrigination | OperationContentsDelegation;

export interface MempoolItem {
    hash: string;
    status: Status;
    broadcastTime: Date;
    branch: string;
    numContents: number;
    maxCounter: bigint;
    gasLimit: number;
    storageLimit: number;
    bakerFee: number;
    includeLevel?: bigint;
    gasUsed?: number;
    storageUsed?: number;
    storageFee?: number;
    allocationFee?: number;
    error?: string;
    data?: any;
}

export class Tracker {
    
    private _items: MempoolItem[];
    private _httpLink: HttpLink;
    private _wsLink: WebSocketLink;

    constructor(
        public readonly httpEndpoint: string,
        public readonly wsEndpoint: string,
        public readonly account: string,
    ) {
        this._items = [];
        this._httpLink =new HttpLink({ uri: httpEndpoint });
        this._wsLink = new WebSocketLink({
            uri: wsEndpoint,
            options: {
                reconnect: true
            }
        });
    }

    public add(operation: ManagersOperation, data?: any) {
        const contents = operation.raw.opOb.contents!;
        if (!(contents[0].kind in [OpKind.TRANSACTION, OpKind.ORIGINATION, OpKind.DELEGATION])) {
            return;
        }

        const lastContent: ManagersContent = contents[contents.length - 1] as ManagersContent;
        if (lastContent.source != this.account) {
            throw Error(`Wrong source, expected ${this.account} got ${lastContent.source}`)
        }

        const item: MempoolItem = {
            hash: operation.hash,
            status: Status.PENDING,
            broadcastTime: new Date(),
            branch: operation.raw.opOb.branch!,
            numContents: contents.length,
            maxCounter: BigInt(lastContent.counter),
            gasLimit: operation.gasLimit,
            storageLimit: operation.storageLimit,
            bakerFee: operation.fee,
            data: data
        }
        this._items.push(item);
    }

    public async start() {
        
    }
}