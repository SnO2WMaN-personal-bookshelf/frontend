import clsx from 'clsx';
import gql from 'graphql-tag';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {Merge} from 'type-fest';
import {LayoutDefault} from '~/components/LayoutDefault';
import {LayoutLoading} from '~/components/LayoutLoading';
import {UserPage, UserPageProps} from '~/components/UserPage';
import {GraphQLRequestSDK} from '~/lib/graphql-request';

export const GetUserForUserPageQuery = gql`
  query GetUserForUserPage($name: String!) {
    user(name: $name) {
      id
      name
      picture
      displayName
      readBooks {
        id
        total
        recordsConnection(first: 10, orderBy: {updatedAt: DESC}) {
          edges {
            node {
              id
              book {
                id
                title
                cover
              }
            }
          }
        }
      }
      readingBooks {
        id
        total
        recordsConnection(first: 10, orderBy: {updatedAt: DESC}) {
          edges {
            node {
              id
              book {
                id
                title
                cover
              }
            }
          }
        }
      }
      wishBooks {
        id
        total
        recordsConnection(first: 10, orderBy: {updatedAt: DESC}) {
          edges {
            node {
              id
              book {
                id
                title
                cover
              }
            }
          }
        }
      }
    }
  }
`;

export const GetAllUsersNameQuery = gql`
  query GetAllUserNames {
    allUsers {
      name
    }
  }
`;

export type PageProps = Merge<
  {
    id: string;
  },
  UserPageProps
>;
export const BookPage: NextPage<PageProps> = ({children, ...rest}) => {
  const router = useRouter();
  if (router.isFallback) return <LayoutLoading />;

  return (
    <LayoutDefault className={clsx('py-8')}>
      <UserPage {...rest} />
    </LayoutDefault>
  );
};

export type UrlQuery = {name: string};
export const getStaticProps: GetStaticProps<PageProps, UrlQuery> = async ({
  params,
}) => {
  if (!params?.name) throw new Error('');

  const {user} = await GraphQLRequestSDK.GetUserForUserPage({
    name: params.name,
  });

  if (!user) throw new Error('');

  const {readBooks, readingBooks, wishBooks, ...rest} = user;

  return {
    props: {
      ...rest,
      readBooks: {
        ...readBooks,
        books: readBooks.recordsConnection.edges.map(({node: {book}}) => ({
          ...book,
        })),
      },
      readingBooks: {
        ...readBooks,
        books: readingBooks.recordsConnection.edges.map(({node: {book}}) => ({
          ...book,
        })),
      },
      wishBooks: {
        ...readBooks,
        books: wishBooks.recordsConnection.edges.map(({node: {book}}) => ({
          ...book,
        })),
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  const {allUsers} = await GraphQLRequestSDK.GetAllUserNames();
  return {
    paths: allUsers.map(({name}) => ({
      params: {name},
    })),
    fallback: true,
  };
};

export default BookPage;
