/* eslint-disable @typescript-eslint/no-var-requires */
import { ApolloClient, InMemoryCache, NormalizedCacheObject, from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { getSession } from 'next-auth/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;
const domain = process.env.NEXT_PUBLIC_CMS_API;
const uri = `${domain}/graphql`;

function createClientLink() {
  const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, path }) => {
        console.log(`error ${message} ${path}`);
      });
    }
  });

  const link = from([errorLink, new HttpLink({ uri })]);

  const authLink = setContext(async (_, { headers }) => {
    const session = await getSession();

    // @ts-ignore
    const token = session?.jwt;

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return authLink.concat(link);
}
function createIsomorphicLink() {
  if (typeof window === 'undefined') {
    const { HttpLink } = require('@apollo/client/link/http');
    return new HttpLink({ uri });
  }

  return createClientLink();
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphicLink(),
    cache: new InMemoryCache({
      typePolicies: {
        Projects: {
          keyFields: (store) => {
            const id = store.id;
            return `Project:${id}`;
          },
        },
      },
    }),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === 'undefined') return _apolloClient;
  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
