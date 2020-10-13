import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {ApolloProvider} from '@apollo/react-hooks';
import {useAuth0} from '@auth0/auth0-react';
import React from 'react';

export const Auth0AuthorizedApolloProvider: React.FC<{
  apiEndpoint: string;
  auth0: {audience: string};
}> = ({children, apiEndpoint, auth0}) => {
  const {getAccessTokenSilently} = useAuth0();

  const [token, setToken] = React.useState<string>('');

  const authLink = setContext(async (_, {headers}) => {
    if (!token)
      setToken(await getAccessTokenSilently({audience: auth0.audience}));

    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });

  const httpLink = createHttpLink({
    uri: apiEndpoint,
  });

  const client = new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
