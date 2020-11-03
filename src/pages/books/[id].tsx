import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  NextPage,
} from 'next';
import React from 'react';
import {BookPage, BookPageProps} from '~/components/Page/BookPage';
import {SdkForPageQueries} from '~/lib/graphql-request';

export type PageProps = BookPageProps;
export const Page: NextPage<PageProps> = (props) => <BookPage {...props} />;

export type UrlQuery = {id: string};
export const getStaticProps: GetStaticProps<PageProps, UrlQuery> = async ({
  params,
}) => {
  if (!params?.id) throw new Error('');

  return SdkForPageQueries.GetBook({id: params.id}).then((data) => ({
    props: data,
  }));
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return SdkForPageQueries.GetAllBookIDs()
    .then(({allBooks}) =>
      allBooks.map(({id}): GetStaticPathsResult<UrlQuery>['paths'][number] => ({
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
