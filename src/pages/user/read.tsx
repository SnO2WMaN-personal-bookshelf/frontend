import {withAuthenticationRequired} from '@auth0/auth0-react';
import clsx from 'clsx';
import gql from 'graphql-tag';
import React from 'react';
import {Layout} from '~/components/layouts/Layout';
import {LoadingLayout} from '~/components/layouts/LoadingLayout';
import {Bookshelf} from '~/components/page/Bookshelf';
import {
  useGetReadBooksQuery,
  useGetReadingBooksQuery,
  useGetWishBooksQuery,
} from '~~/generated/graphql';

export const Query = gql`
  query GetReadBooks {
    currentUser {
      displayName
      books: readBooks {
        id
      }
    }
  }
`;

export const BooksPage: React.FC<{
  useQuery:
    | typeof useGetReadBooksQuery
    | typeof useGetReadingBooksQuery
    | typeof useGetWishBooksQuery;
}> = ({useQuery}) => {
  const {data, error, loading} = useQuery();

  if (loading || !data) return <LoadingLayout />;
  if (error)
    return (
      <main>
        <p>{JSON.stringify(error)}</p>
      </main>
    );

  return (
    <Layout>
      <h1 className={clsx('text-xl')}>{data.currentUser.displayName}</h1>
      <Bookshelf id={data.currentUser.books.id} />
    </Layout>
  );
};

export const ReadBooksPage: React.FC = () => {
  return <BooksPage useQuery={useGetReadBooksQuery} />;
};

export default withAuthenticationRequired(ReadBooksPage);
