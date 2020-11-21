import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';

export type ComponentProps = {
  className?: string;
  cover?: string;
  title: string;
  href: string;
};
export const ComponentBase: React.FC<ComponentProps> = ({
  className,
  title,
  href,
  cover,
}) => (
  <div className={clsx(className)}>
    <NextLink href={href}>
      <a className={clsx('h-full')}>
        <div className={clsx('image-container', 'relative')}>
          <img className={clsx()} src={cover} alt={title} />
        </div>
      </a>
    </NextLink>
  </div>
);

export const Component = styled(ComponentBase)`
  perspective: 500;
  .image-container {
    transform-origin: top;
    transition-property: transform;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
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
  }
  &:hover {
    .image-container {
      transform: translateZ(6px) rotateX(10deg);
      &::after {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

export type ContainerProps = {
  className?: string;
  book: {
    id: string;
    title: string;
    cover?: string;
  };
};
export const Container: React.FC<ContainerProps> = ({book, ...props}) => {
  return <Component {...props} {...book} href={`/books/${book.id}`} />;
};
