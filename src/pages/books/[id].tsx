import gql from 'graphql-tag';
import {Maybe} from 'graphql/jsutils/Maybe';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {Layout} from '~/components/Layout/DefaultLayout';
import {LoadingLayout} from '~/components/Layout/LoadingLayout';
import {GraphQLRequestSDK} from '~/lib/graphql-request';

export const GetBookQuery = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      id
      title
      isbn
      cover
    }
  }
`;

export const GetAllBookIDsQuery = gql`
  query GetAllBookIDs {
    allBooks {
      id
    }
  }
`;

export type PageProps = {
  id: string;
  title: string;
  isbn?: Maybe<string>;
  cover?: Maybe<string>;
};
export const BookPage: NextPage<PageProps> = ({
  title,
  children,
  cover,
  isbn,
}) => {
  const router = useRouter();

  if (router.isFallback) return <LoadingLayout />;

  return (
    <Layout>
      <p>{title}</p>
      {cover && <img src={cover} alt={title} />}
      {isbn && <p>{isbn}</p>}
    </Layout>
  );
};

export type UrlQuery = {id: string};
export const getStaticProps: GetStaticProps<PageProps, UrlQuery> = async ({
  params,
}) => {
  if (!params?.id) throw new Error('');

  return GraphQLRequestSDK.GetBook({
    id: params.id,
  }).then(({book}) => ({
    props: book,
  }));
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  const {allBooks} = await GraphQLRequestSDK.GetAllBookIDs();

  return {
    paths: allBooks.map(({id}) => ({
      params: {id},
    })),
    fallback: true,
  };
};

export default BookPage;
