import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import {Merge} from 'type-fest';
import {BookLinkProps} from '~/components/BookLink';

export type ComponentProps = Merge<Pick<Props, 'className' | 'books'>, unknown>;
export const ComponentBase: React.FC<ComponentProps> = ({className, books}) => (
  <div
    className={clsx(
      className,
      'overflow-x-scroll',
      'overflow-y-hidden',
      'py-4',
    )}
  >
    <ul className={clsx('flex', 'min-w-full', 'h-full', 'space-x-4')}>
      {books.map((book) => (
        <img
          className={clsx('h-full')}
          key={book.id}
          src={book.cover}
          alt={book.title}
        />

        /* <BookLink className={clsx()} book={book} key={book.id} />*/
      ))}
    </ul>
  </div>
);

export const Component = styled(ComponentBase)``;

export type Props = {
  className?: string;
  books: BookLinkProps['book'][];
};
export const UserPageBooksList: React.FC<Props> = (props) => {
  return <Component {...props} />;
};
