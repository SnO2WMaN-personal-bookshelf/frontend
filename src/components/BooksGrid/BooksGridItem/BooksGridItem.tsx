import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export type ComponentProps = {
  className?: string;
  cover: string;
  title: string;
  href: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  cover,
  href,
}) => (
  <Link href={href} passHref>
    <a className={clsx(className, 'flex', 'flex-col', 'items-center')}>
      <div className={clsx('flex-grow', 'w-full', 'relative')}>
        <img
          className={clsx(
            'absolute',
            'inset-0',
            'w-full',
            'h-full',
            'object-center',
            'object-contain',
          )}
          src={cover}
          alt={title}
        />
      </div>
      <div className={clsx('w-full', 'text-center')}>
        <a className={clsx('block', 'text-xs', 'break-all')}>{title}</a>
      </div>
    </a>
  </Link>
);

export type ContainerProps = {
  className?: string;
  cover?: string;
  id: string;
  title: string;
};
export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <Component
      {...props}
      href={`/books/${props.id}`}
      cover={props.cover || '/default_cover.png'}
    />
  );
};
