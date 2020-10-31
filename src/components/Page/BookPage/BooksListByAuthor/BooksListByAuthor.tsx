import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {BooksGrid} from '~/components/BooksGrid';

export type ComponentProps = {
  className?: string;
  authorName: string;
  authorHref: string;
  books: {id: string; title: string; cover?: string}[];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  books,
  authorHref: href,
  authorName: name,
}) => (
  <div className={className}>
    <div className={clsx('px-8', 'mb-4')}>
      <h3 className={clsx('text-xl', 'select-all', 'mb-2')}>
        <Link href={href} passHref>
          <a>{name}</a>
        </Link>
      </h3>
    </div>
    <BooksGrid
      books={books}
      className={clsx(
        'w-full',
        'h-64',
        'md:h-72',
        'lg:h-48',
        'grid-cols-4',
        'md:grid-cols-6',
        'lg:grid-cols-8',
      )}
    />
  </div>
);

export type ContainerProps = {
  className?: string;
  authorId: string;
  name: string;
  books: ComponentProps['books'];
};
export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <Component
      {...props}
      authorName={props.name}
      authorHref={`/authors/${props.authorId}`}
    />
  );
};
