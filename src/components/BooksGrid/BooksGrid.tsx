import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import {BooksGridItem} from './BooksGridItem';

export type ComponentProps = {
  className?: string;
  books: {id: string; title: string; cover?: string}[];
};
export const ComponentBase: React.FC<ComponentProps> = ({className, books}) => (
  <div className={clsx(className, 'grid')}>
    {books.map((book) => (
      <BooksGridItem key={book.id} {...book} className={clsx('h-full')} />
    ))}
  </div>
);

export const Component = styled(ComponentBase)``;

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
