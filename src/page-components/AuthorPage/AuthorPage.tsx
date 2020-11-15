import clsx from 'clsx';
import React from 'react';
import {BooksListForSeries} from '~/page-components/BookPage/BooksListForSeries';
import {SeriesPageBooksList} from '~/page-components/SeriesPage/SeriesPageBooksList';
import {GetAuthorQuery} from '~~/generated/graphql-codegen/graphql-request/pages';

export type ComponentProps = {
  className?: string;
  id: string;
  name: string;
  books: {
    id: string;
    title: string;
    cover?: string;
  }[];
  series: {
    id: string;
    title: string;

    relatedAuthors: {
      id: string;
      name: string;
    }[];
    books: {
      id: string;
      title: string;
      cover?: string;
    }[];
    booksTotal: number;
  }[];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  name,
  books,
  series,
}) => (
  <main
    className={clsx(className, 'grid', 'grid-cols-1', 'gap-y-4', 'lg:gap-y-8')}
  >
    <section className={clsx()}>
      <div
        className={clsx(
          'container',
          'max-w-screen-lg',
          'mx-auto',
          'px-4',
          'lg:px-0',
        )}
      >
        <h1
          className={clsx(
            'text-3xl',
            'tracking-wide',
            'font-bold',
            'break-all',
            'mb-2',
            'select-all',
          )}
        >
          {name}
        </h1>
      </div>
    </section>
    <section className={clsx()}>
      <h2 className={clsx('px-8', 'text-2xl', 'mb-4')}>関連するシリーズ</h2>
      <div className={clsx('space-y-4')}>
        {series.map(({id, ...rest}) => (
          <BooksListForSeries key={id} seriesId={id} {...rest} />
        ))}
      </div>
    </section>
    <section className={clsx()}>
      <h2 className={clsx('px-8', 'text-2xl', 'mb-4')}>作者による本</h2>
      <SeriesPageBooksList className={clsx('w-full')} books={books} />
    </section>
  </main>
);

export type ContainerProps = GetAuthorQuery;
export const Container: React.FC<ContainerProps> = ({author, ...props}) => {
  return (
    <Component
      {...props}
      {...author}
      books={author.books.edges.map(({node: {cover, ...rest}}) => ({
        cover: cover || undefined,
        ...rest,
      }))}
      series={author.series.edges.map(({node}) => ({
        ...node,
        books: node.books.edges.map(({node: {book: {cover, ...rest}}}) => ({
          cover: cover || undefined,
          ...rest,
        })),
        booksTotal: node.books.aggregate.count,
      }))}
    />
  );
};
