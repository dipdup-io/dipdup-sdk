import { 
    ApolloClient,
    InMemoryCache,
    HttpLink,
    split,
    gql
} from '@apollo/client/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';


export class MempoolClient {
    private _httpLink: HttpLink;
    private _wsLink: WebSocketLink;

    constructor(
        public readonly httpEndpoint: string,
        public readonly wsEndpoint: string,
        public readonly account: string,
    ) {
        const httpLink =new HttpLink({
            uri: httpEndpoint
        });
        const wsLink = new WebSocketLink({
            uri: wsEndpoint,
            options: {
                reconnect: true
            }
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
            httpLink,
        );

        const client = new ApolloClient({
            link: splitLink,
            cache: new InMemoryCache()
        });

        client.query()
    }
}