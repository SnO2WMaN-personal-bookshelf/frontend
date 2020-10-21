import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Merge} from 'type-fest';
import {UserPageMenuColumn} from '~/components/UserPageMenuColumn';

export type ComponentProps = Merge<
  ContainerProps,
  {i18n: {[key in 'readBooks' | 'readingBooks' | 'wishBooks']: string}}
>;
export const Component: React.FC<ComponentProps> = ({
  className,
  readBooksTotal,
  readingBooksTotal,
  wishBooksTotal,
  i18n,
}) => (
  <ul
    className={clsx(
      className,
      'border',
      'divide-x',
      'flex',
      'justify-items-stretch',
    )}
  >
    <UserPageMenuColumn
      href="#read"
      i18n={{
        title: i18n.readBooks,
      }}
      total={readBooksTotal}
    />
    <UserPageMenuColumn
      href="#reading"
      i18n={{
        title: i18n.readingBooks,
      }}
      total={readingBooksTotal}
    />
    <UserPageMenuColumn
      href="#wish"
      i18n={{
        title: i18n.wishBooks,
      }}
      total={wishBooksTotal}
    />
    <li className={clsx('flex-grow')} />
  </ul>
);

export type ContainerProps = {
  className?: string;
  readBooksTotal: number;
  readingBooksTotal: number;
  wishBooksTotal: number;
};
export const Container: React.FC<ContainerProps> = (props) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      i18n={{
        readBooks: t('読んだ本'),
        readingBooks: t('読んでいる本'),
        wishBooks: t('読みたい本'),
      }}
    />
  );
};
