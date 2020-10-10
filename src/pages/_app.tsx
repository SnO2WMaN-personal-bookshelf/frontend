/* eslint-disable no-process-env */
import {ApolloProvider} from '@apollo/react-hooks';
import clsx from 'clsx';
import {AppProps} from 'next/app';
import React from 'react';
import {createApolloClient} from '~/apollo/client';
import {HeaderNav} from '~/components/header-nav/HeaderNav';
import '~/styles/tailwind.css';

export type Props = AppProps;
export const App: React.FC<Props> = ({Component, pageProps}) => {
  return (
    <ApolloProvider
      client={createApolloClient({uri: process.env.GRAPHQL_API_ENDPOINT!})}
    >
      <HeaderNav className={clsx('w-full')} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
