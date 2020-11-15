import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  NextPage,
} from 'next';
import React from 'react';
import {SdkForPageQueries} from '~/lib/graphql-request';
import {AuthorPage, AuthorPageProps} from '~/page-components/AuthorPage';

export type PageProps = AuthorPageProps;
export const Page: NextPage<AuthorPageProps> = (props) => (
  <AuthorPage {...props} />
);

export type UrlQuery = {id: string};
export const getStaticProps: GetStaticProps<PageProps, UrlQuery> = async ({
  params,
}) => {
  if (!params?.id) throw new Error('');

  return SdkForPageQueries.GetAuthor({id: params.id}).then((data) => ({
    props: data,
  }));
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return SdkForPageQueries.GetAllAuthorsID()
    .then(({allAuthors}) =>
      allAuthors.map(({id}): GetStaticPathsResult<
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
