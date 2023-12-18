// apolloClient.ts
import {ApolloClient, InMemoryCache, createHttpLink, ApolloLink, from} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import store from "../redux/Store";
import {onError} from "@apollo/client/link/error";

const httpLink = createHttpLink({
    uri: 'https://api.mobtwin.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    const {
        auth: {accessToken},
    } = store.getState()

    return {
        headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
    };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );

    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
    link: ApolloLink.from([authLink, httpLink, errorLink]),
    cache: new InMemoryCache(),
});

export default client;
