import clsx from 'clsx';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Bookshelf, BookType} from '~/components/bookshelf/Bookshelf';
import {Spinner} from '~/components/Spinner';
import {useGetBookshelfQuery} from '~~/generated/graphql';

export const InfiniteLoader = (
  <Spinner className={clsx('text-blue-400', 'text-4xl')} />
);

export const BookshelfPage: React.FC<{id: string}> = ({id}) => {
  const {data, loading, fetchMore} = useGetBookshelfQuery({variables: {id}});

  const [books, setBooks] = useState<BookType[]>([]);
  const [pageInfo, setPageInfo] = useState<{
    hasNextPage: boolean;
    endCursor?: string;
  }>({hasNextPage: false});

  useEffect(() => {
    if (data?.bookshelf?.books) {
      const {edges, pageInfo} = data.bookshelf.books;
      if (edges) {
        setBooks(
          edges.map(({node: {cover, ...rest}}) => ({
            ...rest,
            cover: cover || undefined,
          })),
        );
      }
      if (pageInfo) {
        setPageInfo({
          hasNextPage: pageInfo.hasNextPage,
          endCursor: pageInfo.endCursor || undefined,
        });
      }
    }
  }, [data]);

  if (loading) {
    return <p>Loading</p>;
  }

  const next = () =>
    fetchMore({
      variables: {
        id,
        endCursor: pageInfo.endCursor,
      },
    }).then(({data}) => {
      if (data?.bookshelf?.books) {
        const {edges, pageInfo} = data.bookshelf.books;
        if (edges) {
          setBooks([
            ...books,
            ...edges.map(({node: {cover, ...rest}}) => ({
              ...rest,
              cover: cover || undefined,
            })),
          ]);
        }
        if (pageInfo) {
          setPageInfo({
            hasNextPage: pageInfo.hasNextPage,
            endCursor: pageInfo.endCursor || undefined,
          });
        }
      }
    });

  return (
    <main>
      <InfiniteScroll
        dataLength={books.length}
        next={next}
        hasMore={pageInfo.hasNextPage}
        loader={InfiniteLoader}
      >
        <Bookshelf books={books} className={clsx('grid-cols-12')} />
      </InfiniteScroll>
    </main>
  );
};

export function OutBookshelfPage() {
  const router = useRouter();
  const {id} = router.query;

  return <BookshelfPage id={id as string} />;
}

export default OutBookshelfPage;
