import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import {Merge} from 'type-fest';
import {Dropdown} from './Dropdown';

export type ContainerProps = {
  className?: string;
  user: {
    image: string;
    name: string;
  };
};

export type Props = Merge<ContainerProps, ContainerProps['user']>;

export const ComponentBase: React.FC<Props> = ({
  className,
  name,
  image,
  user,
}) => (
  <details className={clsx(className, 'relative')}>
    <summary className={clsx('list-none', 'outline-none')}>
      <div className={clsx('cursor-pointer')}>
        <img src={image} alt={name} className={clsx('h-8', 'rounded')} />
      </div>
    </summary>
    <Dropdown
      className={clsx('absolute', 'min-w-full', 'mt-1', 'right-0', 'z-50')}
    />
  </details>
);

export const Component = styled(ComponentBase)`
  > summary {
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 20;
    }
    &::-webkit-details-marker {
      display: none;
    }
  }
  &:not([open]) > summary::before {
    display: none;
  }
`;

export const User: React.FC<ContainerProps> = (props) => {
  return <Component {...props} {...props.user} />;
};
