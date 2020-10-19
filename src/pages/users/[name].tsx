import clsx from 'clsx';
import gql from 'graphql-tag';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Layout} from '~/components/Layout/DefaultLayout';
import {LoadingLayout} from '~/components/Layout/LoadingLayout';
import {UserPageMenu} from '~/components/UserPageMenu/UserPageMenu';
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
        books(first: 7) {
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
        books(first: 7) {
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
        books(first: 7) {
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

export type PageProps = {
  id: string;
  name: string;
  displayName: string;
  picture: string;
  readBooks: {books: {totalItems: number}};
  readingBooks: PageProps['readBooks'];
  wishBooks: PageProps['readBooks'];
};
export const BookPage: NextPage<PageProps> = ({
  children,
  name,
  displayName,
  picture,
  readBooks,
  readingBooks,
  wishBooks,
}) => {
  const router = useRouter();
  const {t} = useTranslation();

  if (router.isFallback) return <LoadingLayout />;

  return (
    <Layout className={clsx('py-8')}>
      <div
        className={clsx(
          'max-w-screen-lg',
          'mx-auto',
          'mb-4',
          'flex',
          'items-center',
        )}
      >
        <div className={clsx('mr-4')}>
          <img
            src={picture}
            alt={displayName}
            className={clsx('w-32', 'h-32', 'rounded-lg')}
          />
        </div>
        <div className={clsx('flex', 'flex-col')}>
          <span className={clsx('text-2xl')}>{displayName}</span>
          <span className={clsx('text-gray-600')}>@{name}</span>
        </div>
      </div>
      <div
        className={clsx('max-w-screen-lg', 'mx-auto', 'flex', 'items-center')}
      >
        <UserPageMenu
          className={clsx('w-full')}
          readBooksTotal={readBooks.books.totalItems}
          readingBooksTotal={readingBooks.books.totalItems}
          wishBooksTotal={wishBooks.books.totalItems}
        />
      </div>
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

  return {props: user};
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
