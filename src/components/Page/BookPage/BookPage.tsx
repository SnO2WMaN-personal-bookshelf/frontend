import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {DetailsTable} from '~/components/Page/BookPage/DetailsTable';
import {GetBookQuery} from '~~/generated/graphql-codegen/graphql-request/pages';
import {BooksListByAuthor} from './BooksListByAuthor';
import {BooksListForSeries} from './BooksListForSeries';

export type ComponentProps = {
  className?: string;
  id: string;
  title: string;
  isbn?: string;
  cover?: string;
  authors: {
    id: string;
    name: string;
    books: {
      id: string;
      title: string;
      cover?: string;
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
      cover?: string;
    }[];
    booksTotal: number;
  }[];
  i18n: {
    [key in 'titleBookslistByAuthors' | 'titleBookslistForSeries']: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  cover,
  series,
  authors,
  isbn,
  i18n,
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
      <h2 className={clsx('px-8', 'text-2xl', 'mb-4')}>
        {i18n.titleBookslistForSeries}
      </h2>
      <div className={clsx('space-y-4')}>
        {series.map(({id, ...rest}) => (
          <BooksListForSeries key={id} seriesId={id} {...rest} />
        ))}
      </div>
    </section>
    <section className={clsx('col-span-4')}>
      <h2 className={clsx('px-8', 'text-2xl', 'mb-4')}>
        {i18n.titleBookslistByAuthors}
      </h2>
      <div className={clsx('space-y-4')}>
        {authors.map(({id, ...rest}) => (
          <BooksListByAuthor key={id} authorId={id} {...rest} />
        ))}
      </div>
    </section>
  </main>
);

export type ContainerProps = GetBookQuery;
export const Container: React.FC<ContainerProps> = ({book, ...props}) => {
  const {t} = useTranslation();
  return (
    <Component
      {...props}
      {...book}
      isbn={book.isbn || undefined}
      cover={book.cover || undefined}
      series={book.series.map((series) => ({
        ...series,
        books: series.books.edges.map(({node: {book}}) => ({
          ...book,
          cover: book.cover || undefined,
        })),
        booksTotal: series.books.aggregate.count,
      }))}
      authors={book.authors.map(({author}) => ({
        ...author,
        books: author.books.edges.map(({node}) => ({
          ...node,
          cover: node.cover || undefined,
        })),
      }))}
      i18n={{
        titleBookslistForSeries: t('関連するシリーズ'),
        titleBookslistByAuthors: t('作者に関連する本'),
      }}
    />
  );
};
