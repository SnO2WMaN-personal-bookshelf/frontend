import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import {SeriesPageBooksList} from '~/page-components/SeriesPage/SeriesPageBooksList';

export type ComponentProps = {
  className?: string;
  href: string;
  books: {
    id: string;
    title: string;
    cover?: string;
  }[];
  i18n: {title: string};
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  books,
  i18n,
  href,
}) => (
  <div className={clsx(className)}>
    <div className={clsx('w-full', 'max-w-screen-lg', 'mx-auto', 'mb-4')}>
      <h1 className={clsx('text-2xl')}>
        <NextLink href={href}>
          <a>{i18n.title}</a>
        </NextLink>
      </h1>
    </div>
    <SeriesPageBooksList className={clsx('w-full')} books={books} />
  </div>
);

export type ContainerProps = {
  className?: string;
  id: string;
  books: {
    id: string;
    title: string;
    cover?: string;
  }[];
  i18n: {title: string};
};
export const Container: React.FC<ContainerProps> = ({id, ...props}) => {
  return <Component {...props} href={`/bookshelves/${id}`} />;
};
