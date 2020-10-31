import clsx from 'clsx';
import {Maybe} from 'graphql/jsutils/Maybe';
import Link from 'next/link';
import React from 'react';
import {Merge} from 'type-fest';
import {DetailsTable} from '~/components/Page/BookPage/DetailsTable';
import {BooksListByAuthor} from './BooksListByAuthor';
import {BooksListForSeries} from './BooksListForSeries';

export type ComponentProps = {
  className?: string;
  id: string;
  title: string;
  isbn?: string;
  cover: string;
  authors: {
    id: string;
    name: string;
    books: {
      id: string;
      title: string;
      cover: string;
    }[];
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
      cover: string;
    }[];
    booksTotal: number;
  }[];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  cover,
  series,
  authors,
  isbn,
}) => (
  <main className={clsx(className, 'grid', 'grid-cols-4', 'gap-y-8')}>
    <div className={clsx('h-64', 'flex', 'justify-center')}>
      <img
        className={clsx('h-auto', 'object-scale-down')}
        src={cover}
        alt={title}
      />
    </div>
    <div className={clsx('col-span-3')}>
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
        {title}
      </h1>
      <ul className={clsx('flex', 'space-x-2', 'mb-2')}>
        {authors.map(({id, name}) => (
          <li key={id}>
            <Link href={`/authors/${id}`} passHref>
              <a className={clsx('text-lg', 'select-all')}>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
      {isbn && <DetailsTable isbn={isbn} />}
    </div>
    <section className={clsx('col-span-4')}>
      <h2 className={clsx('px-8', 'text-2xl', 'mb-4')}>関連するシリーズ</h2>
      <div className={clsx('space-y-4')}>
        {series.map(({id, ...rest}) => (
          <BooksListForSeries key={id} seriesId={id} {...rest} />
        ))}
      </div>
    </section>
    <section className={clsx('col-span-4')}>
      <h2 className={clsx('px-8', 'text-2xl', 'mb-4')}>作者による本</h2>
      <div className={clsx('space-y-4')}>
        {authors.map(({id, ...rest}) => (
          <BooksListByAuthor key={id} authorId={id} {...rest} />
        ))}
      </div>
    </section>
  </main>
);

export type ContainerProps = Merge<
  ComponentProps,
  {
    cover?: Maybe<string>;
    isbn?: Maybe<string>;
    authors: {
      id: string;
      name: string;
      books: {
        id: string;
        title: string;
        cover?: Maybe<string>;
      }[];
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
  isbn,
  cover,
  series,
  authors,
  ...props
}) => {
  return (
    <Component
      {...props}
      isbn={isbn || undefined}
      cover={cover ?? '/default_cover.png'}
      series={series.map(({books, ...rest}) => ({
        ...rest,
        books: books.map(({cover, ...rest}) => ({
          cover: cover ?? '/default_cover.png',
          ...rest,
        })),
      }))}
      authors={authors.map(({books, ...rest}) => ({
        ...rest,
        books: books.map(({cover, ...rest}) => ({
          cover: cover ?? '/default_cover.png',
          ...rest,
        })),
      }))}
    />
  );
};
