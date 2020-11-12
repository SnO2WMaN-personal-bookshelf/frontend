import {withAuthenticationRequired} from '@auth0/auth0-react';
import gql from 'graphql-tag';
import React from 'react';
import {useGetReadingBooksQuery} from '~~/generated/graphql-codegen/apollo/components';
import {BooksPage} from './read';

export const Query = gql`
  query GetReadingBooks {
    currentUser {
      displayName
      books: readingBooks {
        id
      }
    }
  }
`;

export const ReadingBooksPage: React.FC = () => {
  return (
    <BooksPage
      useQuery={useGetReadingBooksQuery}
      i18nKeys={{title: '{{name}}が読んでいる本'}}
    />
  );
};

export default withAuthenticationRequired(ReadingBooksPage);
