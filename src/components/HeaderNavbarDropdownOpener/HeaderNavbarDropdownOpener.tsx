import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import {Merge} from 'type-fest';
import {HeaderNavbarDropdown} from '~/components/HeaderNavbarDropdown';
import {useHeaderNavbarDropdownOpenerQuery} from '~~/generated/graphql-codegen/apollo';

export type ComponentProps = Merge<
  ContainerProps,
  Partial<{
    picture: string;
    displayName: string;
    name: string;
  }>
>;
export const ComponentBase: React.FC<ComponentProps> = ({
  className,
  name,
  picture,
}) => (
  <details className={clsx(className, 'relative')}>
    <summary className={clsx('list-none', 'outline-none')}>
      <div className={clsx('cursor-pointer')}>
        <img src={picture} alt={name} className={clsx('h-8', 'rounded')} />
      </div>
    </summary>
    <HeaderNavbarDropdown
      className={clsx('absolute', 'min-w-full', 'mt-1', 'right-0', 'z-50')}
      user={{name}}
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

export type ContainerProps = {
  className?: string;
};
export const Container: React.FC<ContainerProps> = (props) => {
  const {data} = useHeaderNavbarDropdownOpenerQuery();

  return <Component {...props} {...data?.currentUser} />;
};
