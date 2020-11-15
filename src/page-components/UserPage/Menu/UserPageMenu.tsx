import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {UserPageMenuButton} from '~/page-components/UserPage/Menu/MenuButton';

export type ComponentProps = {
  className?: string;

  readBooksTotal: number;
  readingBooksTotal: number;
  wishBooksTotal: number;
  i18n: {
    readBooks: string;
    readingBooks: string;
    wishBooks: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
  className,
  readBooksTotal,
  readingBooksTotal,
  wishBooksTotal,
  i18n,
}) => (
  <section className={clsx(className)}>
    <div className={clsx('w-full', 'max-w-screen-lg', 'mx-auto')}>
      <div
        className={clsx(
          className,
          'border',
          'divide-x',
          'flex',
          'justify-items-stretch',
        )}
      >
        <UserPageMenuButton total={readBooksTotal} text={i18n.readBooks} />
        <UserPageMenuButton
          total={readingBooksTotal}
          text={i18n.readingBooks}
        />
        <UserPageMenuButton total={wishBooksTotal} text={i18n.wishBooks} />
        <div className={clsx('flex-grow')} />
      </div>
    </div>
  </section>
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
