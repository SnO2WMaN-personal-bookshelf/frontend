import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export interface BookType {
  id: string;
  title: string;
  cover?: string;
}

export interface ContainerProps {
  className?: string;

  books: BookType[];
}
export type Props = ContainerProps;

export const BookComponent: React.FC<{
  className?: string;

  id: string;
  title: string;
  cover?: string;
}> = ({className, id, cover, title}) => (
  <li className={clsx(className)}>
    <Link href={`/books/${id}`}>
      <a className={clsx('flex', 'justify-center')}>
        <img src={cover} alt={title} />
      </a>
    </Link>
  </li>
);

export const Component: React.FC<Props> = ({className, books}) => (
  <ul className={clsx(className, 'grid')}>
    {books.map(({id, ...rest}) => (
      <BookComponent key={id} id={id} {...rest} />
    ))}
  </ul>
);

export const Bookshelf: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
