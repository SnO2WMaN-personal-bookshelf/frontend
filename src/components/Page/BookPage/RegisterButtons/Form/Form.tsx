import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useRegisterBookToBookshelfMutation} from '~~/generated/graphql-codegen/apollo/components';

export type ComponentProps = {
  className?: string;

  bookId: string;
  title: string;

  close(): void;
  onClick(): void;

  i18n: {
    message: string;
    register: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
  className,
  bookId: id,
  title,
  onClick,
  close,
  i18n,
}) => (
  <div className={clsx(className, 'relative', 'bg-white', 'px-8', 'py-8')}>
    <button
      className={clsx(
        'w-8',
        'h-8',
        'absolute',
        'flex',
        'justify-center',
        'items-center',
        'top-0',
        'right-0',
      )}
      type="button"
      onClick={close}
    >
      <FontAwesomeIcon icon={faTimes} />
    </button>
    <p className={clsx('text-lg')}>{i18n.message}</p>
    <button
      className={clsx('bg-blue-500', 'text-white', 'rounded', 'px-4', 'py-2')}
      type="button"
      onClick={onClick}
    >
      {i18n.register}
    </button>
  </div>
);

export type ContainerProps = {
  className?: string;

  id: string;
  title: string;

  type: 'read' | 'reading' | 'wish';
  bookshelf: string;
  close(): void;
};
export const Container: React.FC<ContainerProps> = ({
  close,
  id: bookId,
  type,
  bookshelf: bookshelfId,
  ...props
}) => {
  const {t} = useTranslation();
  const [
    register,
    {data, called, loading, error},
  ] = useRegisterBookToBookshelfMutation();

  return (
    <Component
      {...props}
      bookId={bookId}
      close={close}
      i18n={{
        message: t(
          {
            read: '{{title}}を読んだ本に登録しますか?',
            reading: '{{title}}を読んでいる本に登録しますか?',
            wish: '{{title}}を読みたい本に登録しますか?',
          }[type],
          {
            title: props.title,
          },
        ),
        register: t('登録する'),
      }}
      onClick={() =>
        register({
          variables: {
            book: bookId,
            bookshelf: bookshelfId,
          },
        }).then(async () => {
          close();
        })
      }
    />
  );
};
