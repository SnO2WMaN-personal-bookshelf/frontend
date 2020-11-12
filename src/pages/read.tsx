import {withAuthenticationRequired} from '@auth0/auth0-react';
import clsx from 'clsx';
import gql from 'graphql-tag';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Container} from '~/components/Bookshelf/Bookshelf';
import {LayoutDefault} from '~/components/LayoutDefault';
import {LayoutLoading} from '~/components/LayoutLoading';
import {
  useGetReadBooksQuery,
  useGetReadingBooksQuery,
  useGetWishBooksQuery,
} from '~~/generated/graphql-codegen/apollo/components';

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
  i18nKeys: {title: string};
}> = ({useQuery, i18nKeys}) => {
  const {t, i18n} = useTranslation();

  const {data, error, loading} = useQuery();

  if (loading || !data) return <LayoutLoading />;
  if (error)
    return (
      <main>
        <p>{JSON.stringify(error)}</p>
      </main>
    );

  return (
    <LayoutDefault>
      <h1 className={clsx('text-xl')}>
        {t(i18nKeys.title, {name: data.currentUser.displayName})}
      </h1>
      <Container id={data.currentUser.books.id} />
    </LayoutDefault>
  );
};

export const ReadBooksPage: React.FC = () => {
  return (
    <BooksPage
      useQuery={useGetReadBooksQuery}
      i18nKeys={{title: '{{name}}が読んだ本'}}
    />
  );
};

export default withAuthenticationRequired(ReadBooksPage);
