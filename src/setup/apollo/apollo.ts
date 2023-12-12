// apolloClient.ts
import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import store from "../redux/Store";

const httpLink = createHttpLink({
    uri: 'https://api.mobtwin.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    const {
        auth: {user},
    } = store.getState()

    const tokenUser = user?.tokenUser

    return {
        headers: {
            ...headers,
            authorization: tokenUser ? `Bearer ${tokenUser}` : '',
        },
    };
});

const client = new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
});

export default client;
