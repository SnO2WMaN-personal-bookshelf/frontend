import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export type ComponentProps = {
  className?: string;
  cover: string;
  title: string;
  href: string;
};
export const ComponentBase: React.FC<ComponentProps> = ({
  className,
  title,
  cover,
  href,
}) => (
  <Link href={href} passHref>
    <a
      className={clsx(
        className,
        'flex',
        'flex-col',
        'items-center',
        'relative',
      )}
    >
      <div
        className={clsx('image-container', 'flex-grow', 'w-full', 'relative')}
      >
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
      <div className={clsx('gloss', 'absolute', 'inset-0')} />
    </a>
  </Link>
);

export const Component = styled(ComponentBase)`
  perspective: 500;
  .image-container {
    transform-origin: top;
    transition-property: transform;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .gloss {
    opacity: 0;
    transform: translateY(-15%);
    transition-property: opacity, transform;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    background: linear-gradient(
      210deg,
      rgba(255, 255, 255, 0.375) 35%,
      transparent 40%
    );
  }
  &:hover {
    .image-container {
      transform: translateZ(12px) rotateX(10deg);
    }
    .gloss {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

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
