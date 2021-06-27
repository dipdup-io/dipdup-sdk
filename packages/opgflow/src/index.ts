import { createClient, Client as MempoolClient } from '@dipdup/mempool';

export class OPGFlow {
    private _client: MempoolClient;

    constructor() {
        this._client = createClient();
    }
}