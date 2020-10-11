import clsx from 'clsx';
import React from 'react';
import {WithAuth} from '~/components/auth0/WithAuth';
import {Layout} from '~/components/layouts/Layout';
import {LoadingLayout} from '~/components/layouts/LoadingLayout';
import {useFetchUser} from '~/lib/user';

export const ReadBooksPage: React.FC = () => {
  const {user, loading} = useFetchUser();
  if (loading) return <LoadingLayout />;
  return (
    <Layout>
      <h1 className={clsx('text-xl')}>{user.name}さんが読んでいる本</h1>
    </Layout>
  );
};

export default WithAuth(ReadBooksPage);
