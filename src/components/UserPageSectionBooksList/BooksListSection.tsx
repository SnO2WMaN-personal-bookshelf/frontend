import clsx from 'clsx';
import React from 'react';
import {UserPageBooksList} from '~/components/UserPageBooksList';

export type ContainerProps = {
  className?: string;
  id: string;
  i18n: {
    title: string;
  };
  books: {
    id: string;
    title: string;
    cover?: string;
  }[];
};

export const BooksListSection: React.FC<ContainerProps> = ({
  className,
  books,
  id,
  i18n,
}) => (
  <section id={id} className={clsx(className)}>
    <div className={clsx('max-w-screen-lg', 'mx-auto', 'mb-2')}>
      <h3 className={clsx('text-2xl', 'font-bold')}>{i18n.title}</h3>
    </div>
    <UserPageBooksList className={clsx('w-full', 'h-64')} books={books} />
  </section>
);
