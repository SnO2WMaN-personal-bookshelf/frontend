import {
  faBook,
  faBookmark,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {RegisterButton} from '~/components/Page/BookPage/RegisterButtons/Button';
import {RegisterForm} from '~/components/Page/BookPage/RegisterButtons/Form';

export type ComponentProps = {
  className?: string;

  id: string;
  title: string;

  i18n: {
    read: string;
    reading: string;
    wish: string;
  };
  onClickRead(): void;
  onClickReading: ComponentProps['onClickRead'];
  onClickWish: ComponentProps['onClickRead'];

  formActivate: boolean;
  formClose(): void;
  bookshelf?: {
    type: 'read' | 'reading' | 'wish';
    id: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
  id,
  title,
  className,
  i18n,
  onClickRead,
  onClickReading,
  onClickWish,
  formActivate,
  bookshelf,
  formClose,
}) => (
  <>
    <div className={clsx(className)}>
      <div className={clsx('flex', 'space-x-2')}>
        <RegisterButton text={i18n.read} icon={faBook} onClick={onClickRead} />
        <RegisterButton
          text={i18n.reading}
          icon={faBookOpen}
          onClick={onClickReading}
        />
        <RegisterButton
          text={i18n.wish}
          icon={faBookmark}
          onClick={onClickWish}
        />
      </div>
    </div>
    {formActivate && bookshelf && (
      <div
        className={clsx(
          'fixed',
          'inset-0',
          'z-50',
          'flex',
          'justify-center',
          'items-center',
        )}
      >
        <div
          className={clsx(
            'absolute',
            'inset-0',
            'bg-black',
            'bg-opacity-25',
            'z-0',
          )}
          onClick={formClose}
          aria-hidden="true"
        />
        <RegisterForm
          id={id}
          title={title}
          className={clsx('relative', 'z-10', 'shadow-lg')}
          bookshelf={bookshelf.id}
          type={bookshelf.type}
          close={formClose}
        />
      </div>
    )}
  </>
);

export type ContainerProps = {
  className?: string;
  id: string;
  title: string;
  readBookshelfId: string;
  readingBookshelfId: string;
  wishBookshelfId: string;
};
export const Container: React.FC<ContainerProps> = ({
  readBookshelfId,
  readingBookshelfId,
  wishBookshelfId,
  ...props
}) => {
  const [form, setForm] = useState(false);
  const [bookshelf, setBookshelf] = useState<{
    type: 'read' | 'reading' | 'wish';
    id: string;
  }>();

  const {t} = useTranslation();
  return (
    <Component
      {...props}
      i18n={{
        read: t('読んだ本に登録'),
        reading: t('読んでいる本に登録'),
        wish: t('読みたい本に登録'),
      }}
      bookshelf={bookshelf}
      onClickRead={() => {
        setBookshelf({type: 'read', id: readBookshelfId});
        setForm(true);
      }}
      onClickReading={() => {
        setBookshelf({type: 'reading', id: readingBookshelfId});
        setForm(true);
      }}
      onClickWish={() => {
        setBookshelf({type: 'wish', id: wishBookshelfId});
        setForm(true);
      }}
      formActivate={form}
      formClose={() => {
        setForm(false);
      }}
    />
  );
};
