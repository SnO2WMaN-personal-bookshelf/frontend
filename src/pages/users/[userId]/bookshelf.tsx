import clsx from 'clsx';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Bookshelf} from '~/components/Bookshelf/Bookshelf';
import {Spinner} from '~/components/Spinner';
import {useGetUserReadBooksQuery} from '~~/generated/graphql';

export const InfiniteLoader = (
  <Spinner className={clsx('text-blue-400', 'text-4xl')} />
);

export function BookshelfPage() {
  const router = useRouter();
  const {userId} = router.query;

  const {data, loading, fetchMore} = useGetUserReadBooksQuery({
    variables: {id: userId as string},
  });

  const [books, setBooks] = useState<
    {
      id: string;
      title: string;
      cover?: string;
    }[]
  >([]);
  const [pageInfo, setPageInfo] = useState<{
    hasNextPage: boolean;
    endCursor?: string;
  }>({hasNextPage: false});

  useEffect(() => {
    if (data?.user?.readBooks.books.edges) {
      setBooks(
        data.user.readBooks.books.edges.map(({node: {cover, ...rest}}) => ({
          ...rest,
          cover: cover || undefined,
        })),
      );
    }
    if (data?.user?.readBooks.books.pageInfo) {
      setPageInfo({
        ...data.user.readBooks.books.pageInfo,
        endCursor: data.user.readBooks.books.pageInfo.endCursor || undefined,
      });
    }
  }, [data]);

  if (loading) return <p>Loading</p>;

  return (
    <main>
      {data?.user?.readBooks.books.edges && (
        <InfiniteScroll
          dataLength={data.user.readBooks.books.edges.length}
          next={() =>
            fetchMore({
              variables: {
                id: userId as string,
                cursor: data?.user?.readBooks.books.pageInfo.endCursor,
              },
            }).then(({data}) => {
              if (data.user?.readBooks.books.edges)
                setBooks([
                  ...books,
                  ...data.user.readBooks.books.edges.map(
                    ({node: {cover, ...rest}}) => ({
                      ...rest,
                      cover: cover || undefined,
                    }),
                  ),
                ]);
              if (data.user?.readBooks.books.pageInfo)
                setPageInfo({
                  ...data.user.readBooks.books.pageInfo,
                  endCursor:
                    data.user.readBooks.books.pageInfo.endCursor || undefined,
                });
            })
          }
          hasMore={pageInfo.hasNextPage}
          loader={InfiniteLoader}
        >
          <Bookshelf books={books} className={clsx('grid-cols-8')} />
        </InfiniteScroll>
      )}
    </main>
  );
}

export default BookshelfPage;
