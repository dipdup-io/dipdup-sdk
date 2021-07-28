import * as signalR from "@microsoft/signalr";
import {
    Config,
    OperationTypes,
    OperationParameters,
    BigMapParameters,
    Params,
    ResponseTypes,
    CHANNEL,
    channelToMethod,
    checkParams
} from './types';
import { State, Block, BigMapUpdate } from '@dipdup/tzkt-api';
import Observable from "zen-observable";


export class Client {
    private connection: signalR.HubConnection;
    private subscriptions: Set<Subscription<any>>;

    constructor(config: Config) {
        this.subscriptions = new Set<Subscription<any>>();

        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(config.url)
            .build();

        let self = this;
        this.connection.on(CHANNEL.HEAD, (message: State) => {
            self.onHead(message);
        });
        this.connection.on(CHANNEL.BLOCKS, (message: Array<Block>) => {
            self.onBlocks(message);
        });
        this.connection.on(CHANNEL.OPERATIONS, (message: Array<OperationTypes>) => {
            self.onOperations(message);
        });
        this.connection.on(CHANNEL.BIGMAPS, (message: Array<BigMapUpdate>) => {
            self.onBigMapUpdates(message);
        });

        if (!config.lazy && !this.isConnected()) {
            this.connection.start().catch(err => console.log(err));
        }
    }


    public stop() {
        if (this.isConnected()) {
            this.connection.stop().catch(err => console.log(err));
        }
        this.subscriptions.clear();
    }

    /*
     * head
     */
    public head(): Observable<State> {
        return new Observable<State>(observer => {
            this.createSubscription<State>(CHANNEL.HEAD, observer)
                .then(f => { return f })
                .catch(observer.error.bind(observer));
        })
    }

    /*
     * blocks
     */
    public blocks(): Observable<Block> {
        return new Observable<Block>(observer => {
            this.createSubscription<Block>(CHANNEL.BLOCKS, observer)
                .then(f => { return f })
                .catch(observer.error.bind(observer));
        })
    }

    /*
     * operations
     */
    public operations(params?: OperationParameters): Observable<OperationTypes> {
        return new Observable<OperationTypes>(observer => {
            this.createSubscription<OperationTypes>(CHANNEL.OPERATIONS, observer, params)
                .then(f => { return f })
                .catch(observer.error.bind(observer));
        })
    }

    /*
     * bigmaps
     */
    public bigmaps(params?: BigMapParameters): Observable<BigMapUpdate> {
        return new Observable<BigMapUpdate>(observer => {
            this.createSubscription<BigMapUpdate>(CHANNEL.BIGMAPS, observer, params)
                .then(f => { return f })
                .catch(observer.error.bind(observer));
        })
    }

    private async createSubscription<Type>(channel: CHANNEL, observer: ZenObservable.Observer<Type>, params?: Params): Promise<() => void> {
        if (!this.isConnected()) {
            await this.connection.start();
        }

        let subscription = new Subscription<Type>(channel, observer, params);
        await this.connection.invoke(subscription.method);
        this.subscriptions.add(subscription);

        return () =>
            this.subscriptions.delete(subscription);
    }

    private handle(channel: CHANNEL, items: Array<ResponseTypes>) {
        items.forEach(item => {
            this.subscriptions.forEach(s => {
                if (s.isOwner(channel, item)) {
                    s.observer.next!(item)
                }
            })

        }, this);
    }

    private isConnected(): boolean {
        return this.connection && this.connection.state === signalR.HubConnectionState.Connected;
    }

    private onHead(head: State) {
        this.handle(CHANNEL.HEAD, [head]);
    }

    private onBlocks(blocks: Array<Block>) {
        this.handle(CHANNEL.BLOCKS, blocks);
    }

    private onOperations(operations: Array<OperationTypes>) {
        this.handle(CHANNEL.OPERATIONS, operations);
    }

    private onBigMapUpdates(updates: Array<BigMapUpdate>) {
        this.handle(CHANNEL.BIGMAPS, updates);
    }
}

class Subscription<Type> {
    private channel: string;
    private params?: Params;

    observer: ZenObservable.Observer<Type>;
    method: string;

    constructor(channel: CHANNEL, observer: ZenObservable.Observer<Type>, params?: Params) {
        this.channel = channel
        this.method = channelToMethod(channel);
        this.params = params;
        this.observer = observer;
    }

    public isOwner(channel: CHANNEL, item: ResponseTypes): boolean {
        if (this.channel !== channel) {
            return false;
        }

        if (this.params) {
            if (!checkParams(this.params, item)) {
                return false;
            }
        }

        return true;
    }
}
