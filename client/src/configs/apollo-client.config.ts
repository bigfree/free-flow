import {
    ApolloClient,
    ApolloLink,
    concat,
    from,
    HttpLink,
    InMemoryCache,
    NextLink,
    NormalizedCacheObject,
    Operation,
    split,
} from '@apollo/client';
import { CachePersistor, LocalForageWrapper } from 'apollo3-cache-persist';

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { FragmentDefinitionNode, OperationDefinitionNode } from 'graphql/language';
// import { removeToken } from '@/store/user.store.ts';
import { onError } from '@apollo/client/link/error';
import localForage from 'localforage';
import useAccessTokenStore from '@stores/tokens/access-token.store.ts';

const cache: InMemoryCache = new InMemoryCache();

const store: LocalForage = localForage.createInstance({
    driver: [localForage.INDEXEDDB, localForage.LOCALSTORAGE],
    name: 'freeflow',
    storeName: 'graphql',
});

export const persistor = new CachePersistor({
    cache,
    storage: new LocalForageWrapper(store),
    maxSize: false,
    debug: true,
    debounce: 50,
    trigger: 'write',
});

await persistor.restore();

/**
 * Represents the endpoint for the Pokefinder API.
 *
 * @type {HttpLink}
 * @property {string} uri - The URI of the Pokefinder GraphQL API.
 */
const freeFlowEndpoint: HttpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
});

/**
 * PokefinderSubscriptionEndpoint is a variable that contains an instance
 * of GraphQLWsLink class.
 *
 * @type {GraphQLWsLink}
 */
const freeFlowSubscriptionEndpoint: GraphQLWsLink = new GraphQLWsLink(
    createClient({
        url: 'ws://localhost:4000/graphql',
        // connectionParams: {
        //     authToken: token,
        // },
    }),
);

const authMiddleware: ApolloLink = new ApolloLink((operation: Operation, forward: NextLink) => {
    // TODO: Add authorization for feature
    const accessToken = useAccessTokenStore.getState().accessToken;
    operation.setContext({
        headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
            // authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9rdWtzdGVyQGdtYWlsLmNvbSIsInN1YiI6eyJpZCI6ImNscHRoNHBnNDAwMDA1ODJzY2pmN2poc3ciLCJmaXJzdE5hbWUiOiJBZGFtIiwibGFzdE5hbWUiOiJNaWtvIiwidXNlcm5hbWUiOm51bGwsImVtYWlsIjoib2t1a3N0ZXJAZ21haWwuY29tIiwiY3JlYXRlZEF0IjoiMjAyMy0xMi0wNlQwNzo1NDo1Ni41NDBaIn0sImlhdCI6MTcwMTg0OTI5NiwiZXhwIjoxNzAyNDU0MDk2fQ.cfxphSGV7B5-m0mKO8EvJW_ZDLTNzrLGTtsP5bqgHCU',
        },
    });

    return forward(operation);
});

const freeFlowErrorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach((graphQlError) => {
            if ('Unauthorized' === graphQlError.message) {
                // TODO: Add unauthorized logic
                console.log('Unauthorized');
                // removeToken();
            }
        });
    }
    if (networkError) {
        console.error(`[Network error]: ${networkError}`);
    }
});

const splitLink = split(
    (operation: Operation) => {
        const definition: OperationDefinitionNode | FragmentDefinitionNode = getMainDefinition(operation.query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    concat(authMiddleware, freeFlowSubscriptionEndpoint),
    from([freeFlowErrorLink, concat(authMiddleware, freeFlowEndpoint)]),
);

export const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: splitLink,
    cache,
    connectToDevTools: true,
    // credentials: 'include',
    defaultOptions: {
        query: {
            fetchPolicy: 'cache-first',
            errorPolicy: 'all',
        },
    },
});
