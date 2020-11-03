import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {SeriesPageBooksList} from '~/components/Page/SeriesPage/SeriesPageBooksList';

export type ComponentProps = {
  className?: string;
  seriesTitle: string;
  seriesHref: string;
  relatedAuthors: {id: string; name: string; href: string}[];
  books: {id: string; title: string; cover?: string}[];
  i18n: {[key in 'booksTotal']: string};
};
export const Component: React.FC<ComponentProps> = ({
  className,
  relatedAuthors,
  seriesHref: href,
  seriesTitle: title,
  books,
  i18n,
}) => (
  <div className={className}>
    <div className={clsx('px-8', 'mb-4')}>
      <h3 className={clsx('text-xl', 'select-all', 'mb-2')}>
        <Link href={href} passHref>
          <a>{title}</a>
        </Link>
      </h3>
      <div className={clsx('px-2')}>
        <ul className={clsx('flex', 'space-x-2')}>
          {relatedAuthors.map(({href, id, name}) => (
            <li key={id}>
              <Link href={href} passHref>
                <a className={clsx('text-normal', 'select-all')}>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <p className={clsx('text-sm', 'mt-1')}>{i18n.booksTotal}</p>
      </div>
    </div>
    <SeriesPageBooksList className={clsx('w-full')} books={books} />
  </div>
);

export type ContainerProps = {
  className?: string;
  title: string;
  seriesId: string;
  books: {id: string; title: string; cover?: string}[];
  booksTotal: number;
  relatedAuthors: {id: string; name: string}[];
};
export const Container: React.FC<ContainerProps> = ({
  title,
  seriesId,
  relatedAuthors,
  ...props
}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      seriesTitle={title}
      seriesHref={`/series/${seriesId}`}
      relatedAuthors={relatedAuthors.map((relatedAuthor) => ({
        ...relatedAuthor,
        href: `/authors/${relatedAuthor.id}`,
      }))}
      i18n={{booksTotal: t('現在全{{total}}巻', {total: props.booksTotal})}}
    />
  );
};
