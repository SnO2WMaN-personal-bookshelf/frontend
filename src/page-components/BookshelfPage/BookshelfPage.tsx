import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Bookshelf,
  BookshelfProps,
} from '~/page-components/BookshelfPage/Bookshelf';
import {GetBookshelfQuery} from '~~/generated/graphql-codegen/graphql-request/pages';

export type ComponentProps = {
  className?: string;
  i18n: {
    heading: string;
  };
  bookshelf: string;
  initialBooks: BookshelfProps['initialBooks'];
  initailEndCursor: BookshelfProps['initialPageInfo'];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  bookshelf,
  i18n,
  initialBooks,
  initailEndCursor: initialEndCursor,
}) => (
  <main className={clsx(className)}>
    <div className={clsx('w-full', 'max-w-screen-lg', 'mx-auto', 'mb-6')}>
      <h1 className={clsx('text-2xl')}>{i18n.heading}</h1>
    </div>
    <Bookshelf
      bookshelf={bookshelf}
      initialBooks={initialBooks}
      initialPageInfo={initialEndCursor}
    />
  </main>
);

export type ContainerProps = GetBookshelfQuery;
export const Container: React.FC<ContainerProps> = ({bookshelf, ...props}) => {
  const {t} = useTranslation();
  return (
    <Component
      {...props}
      bookshelf={bookshelf.id}
      i18n={{
        heading: t(
          {
            READ: '{{name}}が読んだ本',
            READING: '{{name}}が読んでいる本',
            WISH: '{{name}}が読みたい本',
            CREATED: '{{name}}の本棚{{title}}',
          }[bookshelf.type],
          {
            name: bookshelf.owner.displayName,
            title: bookshelf.title,
          },
        ),
      }}
      initialBooks={bookshelf.recordsConnection.edges.map((record) => ({
        ...record.node.book,
      }))}
      initailEndCursor={{
        endCursor: bookshelf.recordsConnection.pageInfo.endCursor || undefined,
        hasNextPage: bookshelf.recordsConnection.pageInfo.hasNextPage || false,
      }}
    />
  );
};
