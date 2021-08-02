import * as signalR from "@microsoft/signalr";
import {
    Config,
    Message,
    OperationTypes,
    OperationParameters,
    BigMapParameters,
    Params,
    ResponseTypes,
    CHANNEL,
    channelToMethod,
    checkParams
} from './types';
import { State, Block, BigMapUpdate, Operation, TransactionOperation } from '@dipdup/tzkt-api';
import Observable from "zen-observable";


export class Client {
    private connection: signalR.HubConnection;
    private subscriptions: Set<Subscription<any>>;
    private networkEvents: Observable<Event>;
    private eventObserver?: ZenObservable.Observer<Event>;

    constructor(config: Config) {
        this.subscriptions = new Set<Subscription<any>>();

        let builder = new signalR.HubConnectionBuilder()
            .withUrl(config.url);
        if (config.reconnect) {
            builder.withAutomaticReconnect();
        }
        this.connection = builder.build();

        let self = this;
        this.connection.on(CHANNEL.HEAD, (message: Message) => {
            self.onHead(message);
        });
        this.connection.on(CHANNEL.BLOCKS, (message: Message) => {
            self.onBlocks(message);
        });
        this.connection.on(CHANNEL.OPERATIONS, (message: Message) => {
            self.onOperations(message);
        });
        this.connection.on(CHANNEL.BIGMAPS, (message: Message) => {
            self.onBigMapUpdates(message);
        });

        this.networkEvents = new Observable<Event>(observer => {
            this.eventObserver = observer;
        })

        if (!config.lazy && !this.isConnected()) {
            this.connection.start().catch(err => console.log(err));
        }
    }

    public events(): Observable<Event> {
        return this.networkEvents;
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
    public head(): Observable<SubscriptionMessage<State>> {
        return new Observable<SubscriptionMessage<State>>(observer => {
            this.createSubscription<State>(CHANNEL.HEAD, observer)
                .then(f => { return f })
                .catch(observer.error.bind(observer));
        })
    }

    /*
     * blocks
     */
    public blocks(): Observable<SubscriptionMessage<Block>> {
        return new Observable<SubscriptionMessage<Block>>(observer => {
            this.createSubscription<Block>(CHANNEL.BLOCKS, observer)
                .then(f => { return f })
                .catch(observer.error.bind(observer));
        })
    }

    /*
     * operations
     */
    public operations(params?: OperationParameters): Observable<SubscriptionMessage<OperationTypes>> {
        return new Observable<SubscriptionMessage<OperationTypes>>(observer => {
            this.createSubscription<OperationTypes>(CHANNEL.OPERATIONS, observer, params)
                .then(f => { return f })
                .catch(observer.error.bind(observer));
        })
    }

    /*
     * bigmaps
     */
    public bigmaps(params?: BigMapParameters): Observable<SubscriptionMessage<BigMapUpdate>> {
        return new Observable<SubscriptionMessage<BigMapUpdate>>(observer => {
            this.createSubscription<BigMapUpdate>(CHANNEL.BIGMAPS, observer, params)
                .then(f => { return f })
                .catch(observer.error.bind(observer));
        })
    }

    private async createSubscription<Type>(channel: CHANNEL, observer: ZenObservable.Observer<SubscriptionMessage<Type>>, params?: Params): Promise<() => void> {
        if (!this.isConnected()) {
            await this.connection.start();
        }

        let subscription = new Subscription<Type>(channel, observer, params);
        await this.connection.invoke(subscription.method);
        this.subscriptions.add(subscription);

        return () =>
            this.subscriptions.delete(subscription);
    }

    private handle(channel: CHANNEL, items: Array<ResponseTypes>, state: number) {
        items.forEach(item => {
            this.subscriptions.forEach(s => {
                if (s.isOwner(channel, item)) {
                    s.observer.next!({
                        data: item,
                        state: state
                    })
                }
            })

        }, this);
    }

    private isConnected(): boolean {
        return this.connection && this.connection.state === signalR.HubConnectionState.Connected;
    }

    private onMessage(channel: CHANNEL, message: Message) {
        switch (message.type) {
            case 0: {
                this.eventObserver?.next!({
                    type: EventType.Init,
                    state: message.state
                });
                break;
            }
            case 1: {
                this.handle(channel, [message.data as State], message.state);
                break;
            }
            case 2: {
                this.eventObserver?.next!({
                    type: EventType.Reorg,
                    state: message.state
                })
                break;
            }
        }
    }

    private onHead(message: Message) {
        this.onMessage(CHANNEL.HEAD, message);
    }

    private onBlocks(message: Message) {
        this.onMessage(CHANNEL.BLOCKS, message);
    }

    private onOperations(message: Message) {
        this.onMessage(CHANNEL.OPERATIONS, message);
    }

    private onBigMapUpdates(message: Message) {
        this.onMessage(CHANNEL.BIGMAPS, message);
    }
}

export interface SubscriptionMessage<Type> {
    data: Type | null,
    state: number
}

export enum EventType {
    Init = 0,
    Reorg = 2
}

export interface Event {
    state: number;
    type: EventType;
}

class Subscription<Type> {
    private channel: string;
    private params?: Params;

    observer: ZenObservable.Observer<SubscriptionMessage<Type>>;
    method: string;

    constructor(channel: CHANNEL, observer: ZenObservable.Observer<SubscriptionMessage<Type>>, params?: Params) {
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
