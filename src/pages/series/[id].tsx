import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  NextPage,
} from 'next';
import React from 'react';
import {SdkForPageQueries} from '~/lib/graphql-request';
import {SeriesPage, SeriesPageProps} from '~/page-components/SeriesPage';

export type PageProps = SeriesPageProps;
export const Page: NextPage<PageProps> = (props) => <SeriesPage {...props} />;

export type UrlQuery = {id: string};
export const getStaticProps: GetStaticProps<PageProps, UrlQuery> = async ({
  params,
}) => {
  if (!params?.id) throw new Error('');

  return SdkForPageQueries.GetSeries({id: params.id}).then((data) => ({
    props: data,
  }));
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return SdkForPageQueries.GetAllSeries()
    .then(({allSeries}) =>
      allSeries.map(({id}): GetStaticPathsResult<
        UrlQuery
      >['paths'][number] => ({
        params: {id},
      })),
    )
    .then(
      (paths): GetStaticPathsResult<UrlQuery> => ({
        paths,
        fallback: true,
      }),
    );
};

export default Page;
