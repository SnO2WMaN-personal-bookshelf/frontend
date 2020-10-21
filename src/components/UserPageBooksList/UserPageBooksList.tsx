import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import {Merge} from 'type-fest';
import {BookLink, BookLinkProps} from '~/components/BookLink';

export type ComponentProps = Merge<
  Pick<ContainerProps, 'className' | 'books'>,
  unknown
>;
export const ComponentBase: React.FC<ComponentProps> = ({className, books}) => (
  <div
    className={clsx(
      className,
      'overflow-x-scroll',
      'overflow-y-hidden',
      'py-4',
    )}
  >
    <ul
      className={clsx(
        'space-x-2',
        'flex',
        'flex-row',
        'flex-no-wrap',
        'space-x-4',
        'min-w-full',
        'h-full',
      )}
    >
      {books.map((book) => (
        <li className={clsx('flex-none')} key={book.id}>
          <BookLink book={book} />
        </li>
      ))}
    </ul>
  </div>
);

export const Component = styled(ComponentBase)``;

export type ContainerProps = {
  className?: string;
  books: BookLinkProps['book'][];
};
export const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
