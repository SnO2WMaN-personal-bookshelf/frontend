import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {ApolloProvider} from '@apollo/react-hooks';
import {useAuth0} from '@auth0/auth0-react';
import React from 'react';

export const Auth0AuthorizedApolloProvider: React.FC<{
  apiEndpoint: string;
  auth0: {audience: string; scope: string};
}> = ({children, apiEndpoint, auth0}) => {
  const {getAccessTokenSilently} = useAuth0();

  const [token, setToken] = React.useState<string>('');

  const httpLink = new HttpLink({
    uri: apiEndpoint,
    fetchOptions: {
      credentials: 'same-origin',
    },
  });

  const withTokenLink = setContext(async () => {
    if (token) {
      return {auth0Token: token};
    }

    const newToken = await getAccessTokenSilently({
      audience: auth0.audience,
      scope: auth0.scope,
    });
    setToken(newToken);
    return {auth0Token: newToken};
  });

  const authLink = setContext((_, {headers, auth0Token}) => ({
    headers: {
      ...headers,
      ...(auth0Token ? {authorization: auth0Token} : {}),
    },
  }));

  const client = new ApolloClient({
    link: ApolloLink.from([withTokenLink, authLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
