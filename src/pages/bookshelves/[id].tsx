import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  NextPage,
} from 'next';
import React from 'react';
import {SdkForPageQueries} from '~/lib/graphql-request';
import {
  BookshelfPage,
  BookshelfPageProps,
} from '~/page-components/BookshelfPage';

export type PageProps = BookshelfPageProps;
export const Page: NextPage<PageProps> = (props) => (
  <BookshelfPage {...props} />
);

export type UrlQuery = {id: string};
export const getStaticProps: GetStaticProps<PageProps, UrlQuery> = async ({
  params,
}) => {
  if (!params?.id) throw new Error('');

  return SdkForPageQueries.GetBookshelf({id: params.id}).then((data) => ({
    props: data,
  }));
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return SdkForPageQueries.GetAllBookshelfIDs()
    .then(({allBookshelves}) =>
      allBookshelves.map(({id}): GetStaticPathsResult<
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
