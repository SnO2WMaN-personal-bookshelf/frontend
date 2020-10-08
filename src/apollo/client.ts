import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

export function createApolloClient({uri}: {uri: string}) {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:4000/graphql',
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  });
}
