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

    constructor({ url, lazy = true, reconnect = true }: Config) {
        this.subscriptions = new Set<Subscription<any>>();

        let builder = new signalR.HubConnectionBuilder().withUrl(url);
        if (reconnect) {
            /** TODO: set custom intervals
             *  By default, the client will wait 0, 2, 10 and 30 seconds respectively before trying up to 4 reconnect attempts.
             */
            builder = builder.withAutomaticReconnect();
        }
        this.connection = builder.build();

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

        if (reconnect) {
            this.connection.onreconnected(async () => {
                self.subscriptions.forEach(async s => await this.connection.invoke(s.method));
            })
        }

        if (!lazy) {
            this.connection.start().catch(error => { throw new Error(error) });
        }
    }

    public async start(): Promise<void> {
        switch (this.connection.state) {
            case signalR.HubConnectionState.Disconnected: {
                await this.connection.start();
                break;
            }
            case signalR.HubConnectionState.Connected: break;
            default: throw new Error(`Intermediate connection hub state: ${this.connection.state}`);
        }
    }

    public async stop() {
        switch (this.connection.state) {
            case signalR.HubConnectionState.Disconnected: break;
            case signalR.HubConnectionState.Connected: {
                await this.connection.stop();
                this.subscriptions.forEach(sub => {
                    if (sub.observer.complete) {
                        sub.observer.complete();
                    }
                });
                this.subscriptions.clear();
                break;
            }
            default: throw new Error(`Intermediate connection hub state: ${this.connection.state}`);
        }
    }

    /*
     * head
     */
    public head(): Observable<State> {
        return new Observable<State>(observer => {
            return this.createSubscription<State>(CHANNEL.HEAD, observer);
        })
    }

    /*
     * blocks
     */
    public blocks(): Observable<Block> {
        return new Observable<Block>(observer => {
            return this.createSubscription<Block>(CHANNEL.BLOCKS, observer);
        })
    }

    /*
     * operations
     */
    public operations(params?: OperationParameters): Observable<OperationTypes> {
        return new Observable<OperationTypes>(observer => {
            return this.createSubscription<OperationTypes>(CHANNEL.OPERATIONS, observer, params);
        })
    }

    /*
     * bigmaps
     */
    public bigmaps(params?: BigMapParameters): Observable<BigMapUpdate> {
        return new Observable<BigMapUpdate>(observer => {
            return this.createSubscription<BigMapUpdate>(CHANNEL.BIGMAPS, observer, params);
        })
    }

    private createSubscription<Type>(channel: CHANNEL, observer: ZenObservable.Observer<Type>, params?: Params): () => void {
        const subscription = new Subscription<Type>(channel, observer, params);
        this.subscriptions.add(subscription);

        this.connection.start()
            .then(() => this.connection.invoke(subscription.method))
            .catch(error => { throw new Error(error) });

        return () => {
            this.subscriptions.delete(subscription);
            if (subscription.observer.complete) {
                subscription.observer.complete();
            }
        }
    }

    private handle(channel: CHANNEL, items: Array<ResponseTypes>) {
        items.forEach(item => {
            this.subscriptions.forEach(s => {
                if (s.observer.next && s.isOwner(channel, item)) {
                    s.observer.next(item)
                }
            })

        }, this);
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
