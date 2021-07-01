import { SubscriptionClient } from 'subscriptions-transport-ws';
import { ExecutionResult } from 'graphql/execution/execute';
import { DocumentNode } from 'graphql/language/ast';
import 'isomorphic-fetch';

export interface QueryParameters {
    query: string | DocumentNode;
    variables?: Record<string, any>;
}

export interface LiveQueryParameters extends QueryParameters {
    onResult: (result: ExecutionResult) => void;
    onError: (error: Error) => void;
}

export interface LiveQuery {
    stop: VoidFunction;
}

export class HasuraClient {
    private _wsClient: SubscriptionClient;
    private _liveQueries: Record<string, LiveQuery>;

    constructor(public readonly httpEndpoint: string, public readonly wsEndpoint: string) {
        this._wsClient = new SubscriptionClient(
            wsEndpoint,
            {
                reconnect: true,
                lazy: true  // do not create a WS connection until the first live query
            }
        );
        this._liveQueries = {};
    }

    public async query(...parameters: QueryParameters[]): Promise<ExecutionResult> {
        if (parameters.length === 0) {
            throw Error('At least one query required');
        }
        const body = parameters.length === 1 ? parameters[0] : parameters;
        return fetch(this.httpEndpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res.json() as ExecutionResult;
        });
    }

    public liveQuery({query, variables = {}, onResult, onError}: LiveQueryParameters): string {
        const matches = query.toString().match(/subscription\s+([\w_]+)/gm);
        if (matches?.length !== 2) {
            throw Error('Expected single "subscription" expression');
        }
        const queryID = matches[1];
        if (this._liveQueries[queryID] !== undefined) {
            throw Error(`Live query with ID = "${queryID}" already exists`);
        }
        let { unsubscribe } = this._wsClient
            .request({ query, variables, operationName: queryID})
            .subscribe({ next: onResult, error: onError });
        this._liveQueries[queryID] = { stop: unsubscribe };
        return queryID;
    }

    public stop(queryID: string) {
        if (this._liveQueries[queryID] !== undefined) {
            this._liveQueries[queryID].stop();
            delete this._liveQueries[queryID];
        }
    }

    public stopAll() {
        this._wsClient.unsubscribeAll();
    }

    public close() {
        this._wsClient.close();
    }
}