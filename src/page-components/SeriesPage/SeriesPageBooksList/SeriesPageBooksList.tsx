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
      'px-0',
      'py-4',
      'lg:py-0',
      Math.ceil(books.length / 4) === 1 && `h-screen-1/5`,
      Math.ceil(books.length / 4) === 2 && `h-screen-2/5`,
      Math.ceil(books.length / 4) === 3 && `h-screen-3/5`,
      Math.ceil(books.length / 4) === 4 && `h-screen-4/5`,
      Math.ceil(books.length / 4) === 5 && `h-screen-5/5`,
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
        Math.ceil(books.length / 4) === 1 && `grid-rows-1`,
        Math.ceil(books.length / 4) === 2 && `grid-rows-2`,
        Math.ceil(books.length / 4) === 3 && `grid-rows-3`,
        Math.ceil(books.length / 4) === 4 && `grid-rows-4`,
        Math.ceil(books.length / 4) === 5 && `grid-rows-5`,

        'lg:gap-y-4',
        'lg:grid-cols-10',
        books.length <= 10 && 'lg:grid-rows-1',
        books.length > 10 && 'lg:grid-rows-2',
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
