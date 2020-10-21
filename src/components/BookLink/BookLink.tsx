import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {Merge} from 'type-fest';

export type ComponentProps = Merge<
  Pick<ContainerProps, 'className'>,
  ContainerProps['book'] & {
    href: string;
  }
>;
export const Component: React.FC<ComponentProps> = ({
  className,
  cover,
  href,
  title,
  id,
}) => (
  <Link href={href} passHref>
    <a className={clsx(className, 'h-full', 'flex')}>
      <img className={clsx('object-scale-down')} src={cover} alt={title} />
    </a>
  </Link>
);

export type ContainerProps = {
  className?: string;
  book: {
    cover?: string;
    id: string;
    title: string;
  };
};
export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <Component {...props} {...props.book} href={`/books/${props.book.id}`} />
  );
};
