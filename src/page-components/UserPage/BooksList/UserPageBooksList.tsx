import clsx from 'clsx';
import React from 'react';
import {SeriesPageBooksList} from '~/page-components/SeriesPage/SeriesPageBooksList';

export type ComponentProps = {
  className?: string;
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
}) => (
  <div className={clsx(className)}>
    <div className={clsx('w-full', 'max-w-screen-lg', 'mx-auto', 'mb-4')}>
      <h1 className={clsx('text-2xl')}>{i18n.title}</h1>
    </div>
    <SeriesPageBooksList className={clsx('w-full')} books={books} />
  </div>
);

export type ContainerProps = {
  className?: string;
  books: {
    id: string;
    title: string;
    cover?: string;
  }[];
  i18n: {title: string};
};
export const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
