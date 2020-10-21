import clsx from 'clsx';
import {Maybe} from 'graphql/jsutils/Maybe';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {UserPageSectionBooksList} from '~/components/UserPageSectionBooksList';
import {UserPageSectionMenu} from '~/components/UserPageSectionMenu';
import {UserPageSectionProfile} from '~/components/UserPageSectionProfile';

export type UserPageProps = {
  name: string;
  displayName: string;
  picture: string;
  readBooks: {
    id: string;
    total: number;
    books: {id: string; title: string; cover?: Maybe<string>}[];
  };
  readingBooks: UserPageProps['readBooks'];
  wishBooks: UserPageProps['readBooks'];
};
export const UserPage: React.FC<UserPageProps> = ({
  readBooks,
  readingBooks,
  wishBooks,
  name,
  displayName,
  picture,
}) => {
  const {t} = useTranslation();

  return (
    <>
      <UserPageSectionProfile
        className={clsx('mb-8')}
        name={name}
        displayName={displayName}
        picture={picture}
      />
      <UserPageSectionMenu
        className={clsx()}
        readTotal={readBooks.total}
        readingTotal={readingBooks.total}
        wishTotal={wishBooks.total}
      />
      <UserPageSectionBooksList
        id="read"
        className={clsx('pt-16')}
        books={readBooks.books.map(({cover, ...rest}) => ({
          ...rest,
          cover: cover || undefined,
        }))}
        i18n={{title: t('読んだ本')}}
      />
      <UserPageSectionBooksList
        id="reading"
        className={clsx('pt-16')}
        books={readingBooks.books.map(({cover, ...rest}) => ({
          ...rest,
          cover: cover || undefined,
        }))}
        i18n={{title: t('読んでいる本')}}
      />
      <UserPageSectionBooksList
        id="wish"
        className={clsx('pt-16')}
        books={wishBooks.books.map(({cover, ...rest}) => ({
          ...rest,
          cover: cover || undefined,
        }))}
        i18n={{title: t('読みたい本')}}
      />
    </>
  );
};
