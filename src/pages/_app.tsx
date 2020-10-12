/* eslint-disable no-process-env */
import {Auth0Provider, Auth0ProviderOptions} from '@auth0/auth0-react';
import clsx from 'clsx';
import {AppProps} from 'next/app';
import Router from 'next/router';
import React from 'react';
import {HeaderNav} from '~/components/header-nav/HeaderNav';
import {Auth0AuthorizedApolloProvider} from '~/components/providers/Auth0AuthorizedApolloProvider';
import '~/styles/tailwind.css';

const onRedirectCallback: Auth0ProviderOptions['onRedirectCallback'] = (
  appState,
) => {
  // Use Next.js's Router.replace method to replace the url
  Router.replace(appState?.returnTo || '/');
};

export type Props = AppProps;
export const App: React.FC<Props> = ({Component, pageProps}) => {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID!}
      audience={process.env.NEXT_PUBLIC_AUDIENCE!}
      scope="read:users"
      redirectUri={typeof window !== 'undefined' && window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Auth0AuthorizedApolloProvider
        apiEndpoint={process.env.GRAPHQL_API_ENDPOINT!}
        auth0={{
          audience: process.env.NEXT_PUBLIC_AUDIENCE!,
          scope: 'read:users',
        }}
      >
        <HeaderNav className={clsx('w-full')} />
        <Component {...pageProps} />
      </Auth0AuthorizedApolloProvider>
    </Auth0Provider>
  );
};

export default App;
