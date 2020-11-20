import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {UserPageBookList} from '~/page-components/UserPage/BooksList';
import {UserPageMenu} from '~/page-components/UserPage/Menu';
import {UserPageProfile} from '~/page-components/UserPage/Profile';
import {GetUserForUserPageQuery} from '~~/generated/graphql-codegen/graphql-request/pages';

export type ComponentProps = {
  className?: string;
  name: string;
  displayName: string;
  picture: string;
  readBooks: {
    id: string;
    total: number;
    books: {id: string; title: string; cover?: string}[];
  };
  readingBooks: ComponentProps['readBooks'];
  wishBooks: ComponentProps['readBooks'];
  i18n: {
    readBooks: string;
    readingBooks: string;
    wishBooks: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
  className,
  name,
  displayName,
  picture,
  readBooks,
  readingBooks,
  wishBooks,
  i18n,
}) => (
  <main className={clsx(className, 'space-y-8')}>
    <UserPageProfile
      className={clsx('w-full')}
      name={name}
      displayName={displayName}
      picture={picture}
    />
    <UserPageMenu
      className={clsx('w-full')}
      readBooksTotal={readBooks.total}
      readingBooksTotal={readingBooks.total}
      wishBooksTotal={wishBooks.total}
    />
    <UserPageBookList
      className={clsx('w-full')}
      {...readBooks}
      i18n={{title: i18n.readBooks}}
    />
    <UserPageBookList
      className={clsx('w-full')}
      {...readingBooks}
      i18n={{title: i18n.readingBooks}}
    />
    <UserPageBookList
      className={clsx('w-full')}
      {...wishBooks}
      i18n={{title: i18n.wishBooks}}
    />
  </main>
);

export type ContainerProps = GetUserForUserPageQuery;
export const Container: React.FC<ContainerProps> = ({user, ...props}) => {
  const {t} = useTranslation();
  return (
    <Component
      {...props}
      i18n={{
        readBooks: t('読んだ本'),
        readingBooks: t('読んでいる本'),
        wishBooks: t('読みたい本'),
      }}
      {...user}
      readBooks={{
        ...user.readBooks,
        books: user.readBooks.recordsConnection.edges.map(({node: {book}}) => ({
          ...book,
          cover: book.cover || undefined,
        })),
      }}
      readingBooks={{
        ...user.readingBooks,
        books: user.readingBooks.recordsConnection.edges.map(
          ({node: {book}}) => ({
            ...book,
            cover: book.cover || undefined,
          }),
        ),
      }}
      wishBooks={{
        ...user.wishBooks,
        books: user.wishBooks.recordsConnection.edges.map(({node: {book}}) => ({
          ...book,
          cover: book.cover || undefined,
        })),
      }}
    />
  );
};
