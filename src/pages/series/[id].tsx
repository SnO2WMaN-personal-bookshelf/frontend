import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {LayoutDefault} from '~/components/LayoutDefault';
import {LayoutLoading} from '~/components/LayoutLoading';
import {SeriesPage, SeriesPageProps} from '~/components/Page/SeriesPage';
import {GraphQLRequestSDK} from '~/lib/graphql-request';

export type PageProps = SeriesPageProps;
export const Page: NextPage<PageProps> = ({children, ...rest}) => {
  const router = useRouter();

  if (router.isFallback) return <LayoutLoading />;

  return (
    <LayoutDefault>
      <SeriesPage {...rest} />
    </LayoutDefault>
  );
};

export type UrlQuery = {id: string};
export const getStaticProps: GetStaticProps<PageProps, UrlQuery> = async ({
  params,
}) => {
  if (!params?.id) throw new Error('');

  const {series} = await GraphQLRequestSDK.GetSeries({
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
  const {allSeries} = await GraphQLRequestSDK.GetAllSeries();

  return {
    paths: allSeries.map(({id}) => ({
      params: {id},
    })),
    fallback: true,
  };
};

export default Page;
