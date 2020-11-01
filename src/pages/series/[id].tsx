import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import React from 'react';
import {SeriesPage, SeriesPageProps} from '~/components/Page/SeriesPage';
import {SdkForPageQueries} from '~/lib/graphql-request';

export type PageProps = SeriesPageProps;
export const Page: NextPage<PageProps> = ({children, ...rest}) => {
  return <SeriesPage {...rest} />;
};

export type UrlQuery = {id: string};
export const getStaticProps: GetStaticProps<PageProps, UrlQuery> = async ({
  params,
}) => {
  if (!params?.id) throw new Error('');

  const {series} = await SdkForPageQueries.GetSeries({
    id: params.id,
  });
  const books: PageProps['books'] = series.books.edges.map(({node}) => ({
    ...node.book,
  }));
  const booksTotal: PageProps['booksTotal'] = series.books.aggregate.count;

  return {
    props: {
      ...series,
      books,
      booksTotal,
    },
  };
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  const {allSeries} = await SdkForPageQueries.GetAllSeries();

  return {
    paths: allSeries.map(({id}) => ({
      params: {id},
    })),
    fallback: true,
  };
};

export default Page;
