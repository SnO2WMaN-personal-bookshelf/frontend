import {useAuth0, withAuthenticationRequired} from '@auth0/auth0-react';
import clsx from 'clsx';
import React from 'react';
import {Layout} from '~/components/layouts/Layout';
import {LoadingLayout} from '~/components/layouts/LoadingLayout';

export const WishBooksPage: React.FC = () => {
  const {isLoading, user} = useAuth0();
  if (isLoading) return <LoadingLayout />;

  return (
    <Layout>
      <h1 className={clsx('text-xl')}>{user.name}さんが読みたい本</h1>
    </Layout>
  );
};

export default withAuthenticationRequired(WishBooksPage);
