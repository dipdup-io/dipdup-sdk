import { createClient, Client as MempoolClient, everything, operation_groups } from '@dipdup/mempool';
import { openDB, IDBPDatabase, DBSchema } from 'idb';
import { Observable, ClientOptions } from '@genql/runtime';

const DB_NAME = 'opgflow';
const DB_VERSION = 1;

export declare enum OPGStatus {
    PENDING = 'pending'
}

export interface OPG extends operation_groups {
    data?: any;
}

export interface OPGSchema extends DBSchema {
    operations: {
        key: string;
        value: OPG;
        indexes: {
            src: string;
        };
    };
}

export function mergeOPG(ours: OPG, theirs: OPG): OPG {
    return {
        ...theirs,
        created_at: ours.created_at,
        data: ours.data
    }
}

export class OPGFlow {
    private _client: MempoolClient;
    private _db?: IDBPDatabase<OPGSchema>;
    private _source?: string;
    private _next?(updates: OPG[]): void;
    private _unsubscribe?(): void;

    constructor(options?: ClientOptions) {
        this._client = createClient(options);
    }

    private async createDB(): Promise<IDBPDatabase<OPGSchema>> {
        if (this._db === undefined) {
            this._db = await openDB<OPGSchema>(DB_NAME, DB_VERSION, {
                upgrade(db) {
                    if (!db.objectStoreNames.contains('operations')) {
                        const store = db.createObjectStore('operations', { keyPath: 'hash' });
                        store.createIndex('src', 'source', { unique: false });
                    }
                }
            });
        }
        return this._db;
    }

    private async getOPGList(source: string): Promise<OPG[]> {
        const db = await this.createDB();
        return await db.getAllFromIndex('operations', 'src', source);
    }

    private async mergeOPGList(updates: OPG[]): Promise<OPG[]> {
        const db = await this.createDB();
        let opgList: OPG[] = [];
        for (const update of updates) {
            const opg = await db.get('operations', update.hash!);
            if (opg !== undefined) {
                const res = mergeOPG(opg, update);
                await db.put('operations', res);
                opgList.push(res);
            }
        }
        return opgList;
    }

    public async addOPG(hash: string, data?: any) {
        if (this._source === undefined || this._next === undefined) {
            throw Error("Select an account first");
        }

        const db = await this.createDB();
        const opg: OPG = {
            __typename: 'operation_groups',
            hash: hash,
            source: this._source,
            created_at: Math.floor(new Date().getTime() / 1000),
            data: data
        };
        await db.put('operations', opg)
        this._next([opg]);
    }
    
    public deselect() {
        this._source = undefined;
        this._next = undefined;
        if (this._unsubscribe) {
            this._unsubscribe();
            this._unsubscribe = undefined;
        }
    }

    public select(source: string): Observable<OPG[]> {
        this.deselect();
        return new Observable(subscriber => {
            const ss = this._client.chain.subscription
                .operation_groups({ 
                    where: {
                        source: { _eq: source }
                    }
                })
                .get({ ...everything })
                .subscribe({
                    next: updates => {
                        this.mergeOPGList(updates)
                            .then(subscriber.next.bind(subscriber))
                            .catch(subscriber.error.bind(subscriber));
                    },
                    error: subscriber.error
                });

            this.getOPGList(source)
                .then(subscriber.next.bind(subscriber))
                .catch(subscriber.error.bind(subscriber));

            this._source = source;
            this._next = subscriber.next.bind(subscriber);
            this._unsubscribe = ss.unsubscribe.bind(ss);

            return () => ss.unsubscribe();
        });
    }

    public close() {
        this._client.wsClient?.unsubscribeAll();
        this._client.wsClient?.close();
    }
}

export function createOPGFlow(subscriptionURL: string): OPGFlow {
    return new OPGFlow({
        subscription: {
            lazy: true,
            reconnect: true,
            url: subscriptionURL
        }
    });
}
