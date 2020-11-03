import clsx from 'clsx';
import {Maybe} from 'graphql/jsutils/Maybe';
import React from 'react';
import {Merge} from 'type-fest';
import {BooksListForSeries} from '~/components/Page/BookPage/BooksListForSeries';
import {SeriesPageBooksList} from '~/components/Page/SeriesPage/SeriesPageBooksList';

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

export type ContainerProps = Merge<
  ComponentProps,
  {
    books: {
      id: string;
      title: string;
      cover?: Maybe<string>;
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
        cover?: Maybe<string>;
      }[];
      booksTotal: number;
    }[];
  }
>;
export const Container: React.FC<ContainerProps> = ({
  books,
  series,
  ...props
}) => {
  return (
    <Component
      {...props}
      books={books.map(({cover, ...rest}) => ({
        cover: cover || undefined,
        ...rest,
      }))}
      series={series.map(({books, ...rest}) => ({
        books: books.map(({cover, ...rest}) => ({
          cover: cover || undefined,
          ...rest,
        })),
        ...rest,
      }))}
    />
  );
};
