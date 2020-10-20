import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Merge} from 'type-fest';
import {UserPageMenuColumn} from '~/components/UserPageMenuColumn';

export type ComponentProps = Merge<
  Pick<
    Props,
    'className' | 'readBooksTotal' | 'readingBooksTotal' | 'wishBooksTotal'
  >,
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
      i18n={{
        title: i18n.readBooks,
      }}
      total={readBooksTotal}
    />
    <UserPageMenuColumn
      i18n={{
        title: i18n.readingBooks,
      }}
      total={readingBooksTotal}
    />
    <UserPageMenuColumn
      i18n={{
        title: i18n.wishBooks,
      }}
      total={wishBooksTotal}
    />
    <li className={clsx('flex-grow')} />
  </ul>
);

export type Props = {
  className?: string;
  readBooksTotal: number;
  readingBooksTotal: Props['readBooksTotal'];
  wishBooksTotal: Props['readBooksTotal'];
};
export const UserPageMenu: React.FC<Props> = (props) => {
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
