import {useQuery} from '@apollo/client';
import {useAuth0, withAuthenticationRequired} from '@auth0/auth0-react';
import clsx from 'clsx';
import gql from 'graphql-tag';
import React from 'react';
import {Layout} from '~/components/layouts/Layout';
import {LoadingLayout} from '~/components/layouts/LoadingLayout';

const QUERY = gql`
  query {
    currentUser {
      id
      readBooks {
        id
        books {
          totalItems
        }
      }
    }
  }
`;

export const ReadBooksPage: React.FC = () => {
  const {isLoading, user} = useAuth0();

  const {data, error, loading} = useQuery(QUERY);

  if (isLoading) return <LoadingLayout />;

  return (
    <Layout>
      <h1 className={clsx('text-xl')}>{user.name}さんが読んだ本</h1>
      {error && <p>{JSON.stringify(error)}</p>}
    </Layout>
  );
};

export default withAuthenticationRequired(ReadBooksPage);
