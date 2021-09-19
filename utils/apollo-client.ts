import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { getSession } from 'next-auth/client';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, path }) => {
      console.log(`error ${message} ${path}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: 'http://localhost:1337/graphql' })]);

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

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

export default client;
