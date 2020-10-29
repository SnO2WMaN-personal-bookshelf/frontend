import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export type ComponentProps = {
  className?: string;
  imageClassName?: string;
  title: string;
  cover: string;
  href: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  imageClassName,
  cover,
  href,
  title,
}) => (
  <div className={clsx(className)}>
    <Link href={href} passHref>
      <a className={clsx('flex')}>
        <img
          className={clsx(imageClassName, 'object-scale-down')}
          src={cover}
          alt={title}
        />
      </a>
    </Link>
  </div>
);

export type ContainerProps = {
  className?: string;
  imageClassName?: string;
  book: {
    cover?: string;
    id: string;
    title: string;
  };
};
export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <Component
      {...props}
      {...props.book}
      cover={props.book.cover || '/default_cover.png'}
      href={`/books/${props.book.id}`}
    />
  );
};
