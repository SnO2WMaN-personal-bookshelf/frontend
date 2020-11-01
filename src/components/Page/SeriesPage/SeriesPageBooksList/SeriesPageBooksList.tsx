import clsx from 'clsx';
import React from 'react';
import {BooksGrid} from '~/components/BooksGrid';

export type ComponentProps = {
  className?: string;
  books: {
    id: string;
    title: string;
    cover?: string;
  }[];
};
export const Component: React.FC<ComponentProps> = ({className, books}) => (
  <div
    className={clsx(
      className,
      'h-screen',
      'px-4',
      'py-4',
      'lg:px-0',
      'lg:py-0',
      books.length <= 10 ? 'lg:h-48' : 'lg:h-96',
    )}
  >
    <BooksGrid
      books={books}
      className={clsx(
        'w-full',
        'h-full',

        'gap-2',

        'grid-cols-4',
        'grid-rows-5',

        'md:grid-cols-5',
        'md:grid-rows-4',

        'lg:gap-y-4',
        'lg:grid-cols-10',
        books.length <= 10 ? 'lg:grid-rows-1' : 'lg:grid-rows-2',
      )}
    />
    <div />
  </div>
);

export type ContainerProps = {
  className?: string;
  books: {
    id: string;
    title: string;
    cover?: string;
  }[];
};
export const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
