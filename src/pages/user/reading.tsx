import {withAuthenticationRequired} from '@auth0/auth0-react';
import gql from 'graphql-tag';
import React from 'react';
import {useGetReadingBooksQuery} from '~~/generated/graphql';
import {BooksPage} from './read';

export const Query = gql`
  query GetReadingBooks {
    currentUser {
      displayName
      books: wishBooks {
        id
      }
    }
  }
`;

export const ReadingBooksPage: React.FC = () => {
  return <BooksPage useQuery={useGetReadingBooksQuery} />;
};

export default withAuthenticationRequired(ReadingBooksPage);
