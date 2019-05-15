import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

// @ts-ignore
let apolloClient = null;
export const isBrowser = typeof window !== 'undefined';

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  // @ts-ignore
  global.fetch = fetch;
}

// @ts-ignore
function create(initialState, { getToken, fetchOptions }) {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/',
    credentials: 'same-origin',
    fetchOptions,
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

// @ts-ignore
export default function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  // @ts-ignore
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  // @ts-ignore
  return apolloClient;
}
