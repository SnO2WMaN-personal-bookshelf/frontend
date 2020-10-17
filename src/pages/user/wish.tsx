import {withAuthenticationRequired} from '@auth0/auth0-react';
import gql from 'graphql-tag';
import React from 'react';
import {useGetWishBooksQuery} from '~~/generated/graphql-codegen/apollo';
import {BooksPage} from './read';

export const Query = gql`
  query GetWishBooks {
    currentUser {
      displayName
      books: readingBooks {
        id
      }
    }
  }
`;

export const WishBooksPage: React.FC = () => {
  return (
    <BooksPage
      useQuery={useGetWishBooksQuery}
      i18nKeys={{title: '{{name}}が読みたい本'}}
    />
  );
};

export default withAuthenticationRequired(WishBooksPage);
