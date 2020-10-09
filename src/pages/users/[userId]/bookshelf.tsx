import clsx from 'clsx';
import {useRouter} from 'next/router';
import React from 'react';
import {Spinner} from '~/components/Spinner';
import {BookshelfPage} from '~/pages/bookshelves/[id]';
import {useGetUserQuery} from '~~/generated/graphql';

export const InfiniteLoader = (
  <Spinner className={clsx('text-blue-400', 'text-4xl')} />
);

export function UserBookshelfPage() {
  const router = useRouter();
  const {userId} = router.query;

  const {data, loading, fetchMore} = useGetUserQuery({
    variables: {id: userId as string},
  });

  if (!loading && data?.user?.readBooks.id)
    return <BookshelfPage id={data.user.readBooks.id} />;

  return <p>Loading</p>;
}

export default UserBookshelfPage;
