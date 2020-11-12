import clsx from 'clsx';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Merge} from 'type-fest';
import {BookLink} from '~/components/BookLink';
import {Spinner} from '~/components/Spinner/Spinner';
import {useBookshelfQuery} from '~~/generated/graphql-codegen/apollo/components';

export type ComponentProps = Merge<
  Pick<ContainerProps, 'className'>,
  {
    books: {id: string; cover?: string; title: string}[];
    i18n: {
      [key in 'bookCounts']: string;
    };
  }
>;
export const Component: React.FC<ComponentProps> = ({
  className,
  books,
  i18n,
}) => (
  <div className={clsx(className)}>
    <p>{i18n.bookCounts}</p>
    <ul className={clsx('grid', 'grid-cols-8', 'gap-4')}>
      {books.map(({cover, title, id}) => (
        <li key={id}>
          <BookLink className={clsx('h-full')} book={{id, cover, title}} />
        </li>
      ))}
    </ul>
  </div>
);

export type ContainerProps = {className?: string; id: string};
export const Container: React.FC<ContainerProps> = ({id, ...props}) => {
  const {t, i18n} = useTranslation();

  const {data, error, loading, fetchMore} = useBookshelfQuery({
    variables: {id},
  });

  const [books, setBooks] = useState<ComponentProps['books']>([]);
  const [pageInfo, setPageInfo] = useState<{
    hasNextPage: boolean;
    endCursor: string | null;
  }>({
    hasNextPage: false,
    endCursor: null,
  });

  useEffect(() => {
    if (
      data?.bookshelf?.recordsConnection.pageInfo &&
      data.bookshelf.recordsConnection.edges
    ) {
      setBooks(
        data.bookshelf.recordsConnection.edges.map(({node: {book}}) => ({
          ...book,
          cover: book.cover || undefined,
        })),
      );
      setPageInfo({
        hasNextPage: Boolean(
          data.bookshelf.recordsConnection.pageInfo.hasNextPage,
        ),
        endCursor: data.bookshelf.recordsConnection.pageInfo.endCursor || null,
      });
    }
  }, [data]);

  const next = () =>
    fetchMore({
      variables: {
        id,
        endCursor: pageInfo.endCursor,
      },
    }).then(({data}) => {
      if (
        data?.bookshelf?.recordsConnection.pageInfo &&
        data.bookshelf.recordsConnection.edges
      ) {
        setBooks([
          ...books,
          ...data.bookshelf.recordsConnection.edges.map(({node: {book}}) => ({
            ...book,
            cover: book.cover || undefined,
          })),
        ]);
        setPageInfo({
          hasNextPage: Boolean(
            data.bookshelf.recordsConnection.pageInfo.hasNextPage,
          ),
          endCursor:
            data.bookshelf.recordsConnection.pageInfo.endCursor || null,
        });
      }
    });

  if (data && data.bookshelf) {
    return (
      <InfiniteScroll
        dataLength={books.length}
        next={next}
        hasMore={pageInfo.hasNextPage}
        loader={InfiniteLoader}
      >
        <Component
          {...props}
          books={books}
          i18n={{
            bookCounts: t('common:units.books', {
              count: data.bookshelf.total,
            }),
          }}
        />
      </InfiniteScroll>
    );
  }

  if (loading) {
    <>
      <p>LOADING</p>
    </>;
  }
  return <p>{JSON.stringify(error)}</p>;
};

export const InfiniteLoader = (
  <Spinner className={clsx('text-blue-400', 'text-4xl')} />
);
