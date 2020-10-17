import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {Merge} from 'type-fest';

export type ComponentProps = Merge<
  Pick<Props, 'className'>,
  Merge<Props['book'], {href: string}>
>;
export const Component: React.FC<ComponentProps> = ({
  className,
  id,
  title,
  cover,
  href,
}) => (
  <li className={clsx(className)}>
    <Link href={href} passHref>
      <a className={clsx('h-full', 'flex')}>
        <img src={cover} alt={title} />
      </a>
    </Link>
  </li>
);

export type Props = {
  className?: string;
  book: {
    cover?: string;
    id: string;
    title: string;
  };
};
export const BookLink: React.FC<Props> = ({book, ...rest}) => {
  return <Component {...rest} {...book} href={`/books/${book.id}`} />;
};
