import clsx from 'clsx';
import React, {useEffect, useState} from 'react';
import {InView, useInView} from 'react-intersection-observer';
import {BookLink} from '~/components/BookLink';
import {Spinner} from '~/components/Spinner/Spinner';
import {useBookshelfNextLoadLazyQuery} from '~~/generated/graphql-codegen/apollo/components';

export type ComponentProps = {
  className?: string;
  books: {
    id: string;
    title: string;
    cover?: string;
  }[];
};
export const Component: React.FC<ComponentProps> = ({className, books}) => (
  <div className={clsx(className)}>
    <div className={clsx('w-full', 'h-full', 'grid', 'gap-2', 'grid-cols-12')}>
      {books.map((book) => (
        <BookLink key={book.id} book={book} className={clsx('h-full')} />
      ))}
    </div>
  </div>
);

export type ContainerProps = {
  className?: string;
  bookshelf: string;
  initialBooks: {
    id: string;
    title: string;
    cover?: string;
  }[];
  initialPageInfo: {
    hasNextPage: boolean;
    endCursor?: string;
  };
};
export const Container: React.FC<ContainerProps> = ({
  bookshelf,
  initialBooks,
  initialPageInfo,
  ...props
}) => {
  const [books, setBooks] = useState(initialBooks);
  const [pageInfo, setPageInfo] = useState<{
    hasNextPage: boolean;
    endCursor?: string;
  }>(initialPageInfo);
  const {ref, inView, entry} = useInView();
  const [next, {loading, data, fetchMore}] = useBookshelfNextLoadLazyQuery();

  useEffect(() => {
    if (loading || !data) return;
    const {pageInfo, edges} = data.bookshelf.recordsConnection;

    setPageInfo({
      endCursor: pageInfo.endCursor || undefined,
      hasNextPage: pageInfo.hasNextPage || false,
    });
    setBooks((previous) => [
      ...previous,
      ...edges.map((record) => ({...record.node.book})),
    ]);
  }, [data, loading]);

  return (
    <>
      <Component {...props} books={books} />
      {!loading && pageInfo.hasNextPage && (
        <InView
          onChange={(inView) => {
            if (inView && pageInfo.endCursor) {
              return next({
                variables: {endCursor: pageInfo.endCursor, bookshelf},
              });
            }
          }}
        >
          <Spinner className={clsx('w-16', 'h-16')} />
        </InView>
      )}
    </>
  );
};
