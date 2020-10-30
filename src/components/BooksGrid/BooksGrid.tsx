import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import {BooksGridItem, BooksGridItemProps} from './BooksGridItem';

export type ComponentProps = {
  className?: ContainerProps['className'];
  books: ContainerProps['books'];
};
export const ComponentBase: React.FC<ComponentProps> = ({className, books}) => (
  <div className={clsx(className, 'grid', 'grid-rows-1')}>
    {books.map((book) => (
      <BooksGridItem key={book.id} {...book} className={clsx('h-full')} />
    ))}
  </div>
);

export const Component = styled(ComponentBase)``;

export type ContainerProps = {
  className?: string;
  books: Pick<BooksGridItemProps, 'id' | 'title' | 'cover'>[];
};
export const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
