import clsx from 'clsx';
import gql from 'graphql-tag';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {Merge} from 'type-fest';
import {Layout} from '~/components/Layout/DefaultLayout';
import {LoadingLayout} from '~/components/Layout/LoadingLayout';
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
        books(first: 10) {
          totalItems
          edges {
            node {
              id
              title
              cover
            }
          }
        }
      }
      readingBooks {
        id
        books(first: 10) {
          totalItems
          edges {
            node {
              id
              title
              cover
            }
          }
        }
      }
      wishBooks {
        id
        books(first: 10) {
          totalItems
          edges {
            node {
              id
              title
              cover
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
  if (router.isFallback) return <LoadingLayout />;

  return (
    <Layout className={clsx('py-8')}>
      <UserPage {...rest} />
    </Layout>
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
        total: readBooks.books.totalItems,
        books: readBooks.books.edges?.map(({node}) => ({...node})) || [],
      },
      readingBooks: {
        ...readingBooks,
        total: readingBooks.books.totalItems,
        books: readingBooks.books.edges?.map(({node}) => ({...node})) || [],
      },
      wishBooks: {
        ...wishBooks,
        total: wishBooks.books.totalItems,
        books: wishBooks.books.edges?.map(({node}) => ({...node})) || [],
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
