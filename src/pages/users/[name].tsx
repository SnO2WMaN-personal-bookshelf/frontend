import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  NextPage,
} from 'next';
import React from 'react';
import {UserPage, UserPageProps} from '~/components/Page/UserPage';
import {SdkForPageQueries} from '~/lib/graphql-request';

export type PageProps = UserPageProps;
export const BookPage: NextPage<PageProps> = (props) => <UserPage {...props} />;

export type UrlQuery = {name: string};
export const getStaticProps: GetStaticProps<PageProps, UrlQuery> = async ({
  params,
}) => {
  if (!params?.name) throw new Error('');

  return SdkForPageQueries.GetUserForUserPage({name: params.name}).then(
    (data) => ({
      props: data,
    }),
  );
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return SdkForPageQueries.GetAllUserNames()
    .then(({allUsers}) =>
      allUsers.map(({name}): GetStaticPathsResult<
        UrlQuery
      >['paths'][number] => ({
        params: {name},
      })),
    )
    .then(
      (paths): GetStaticPathsResult<UrlQuery> => ({
        paths,
        fallback: true,
      }),
    );
};

export default BookPage;
