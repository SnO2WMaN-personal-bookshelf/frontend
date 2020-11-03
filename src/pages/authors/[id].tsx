import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import React from 'react';
import {AuthorPage, AuthorPageProps} from '~/components/Page/AuthorPage';
import {SdkForPageQueries} from '~/lib/graphql-request';

export type PageProps = AuthorPageProps;
export const Page: NextPage<AuthorPageProps> = ({children, ...rest}) => {
  return <AuthorPage {...rest} />;
};

export type UrlQuery = {id: string};
export const getStaticProps: GetStaticProps<PageProps, UrlQuery> = async ({
  params,
}) => {
  if (!params?.id) throw new Error('');

  const {author} = await SdkForPageQueries.GetAuthor({id: params.id});

  const books: PageProps['books'] = author.books.edges.map(({node}) => node);
  const series: PageProps['series'] = author.series.edges.map(({node}) => ({
    ...node,
    books: node.books.edges.map(({node: {book}}) => book),
    booksTotal: node.books.aggregate.count,
  }));

  return {
    props: {
      ...author,

      series,
      books,
    },
  };
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  const {allAuthors} = await SdkForPageQueries.GetAllAuthorsID();

  return {
    paths: allAuthors.map(({id}) => ({
      params: {id},
    })),
    fallback: true,
  };
};

export default Page;
