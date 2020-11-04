import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import {HeaderNavbarProfileDropdown} from '~/components/Navbar/Profile/Dropdown';

export type ComponentProps = {
  className?: string;
  profile: {name: string; displayName: string; picture: string};
};
export const ComponentBase: React.FC<ComponentProps> = ({
  className,
  profile,
}) => (
  <details className={clsx(className, 'flex', 'relative')}>
    <summary className={clsx('list-none', 'outline-none')}>
      <div className={clsx('cursor-pointer')}>
        <img
          className={clsx('h-10', 'rounded-full')}
          src={profile.picture}
          alt={profile.displayName}
        />
      </div>
    </summary>
    <div
      className={clsx(
        'fixed',
        'inset-x-0',
        'top-0',

        'mt-20',
        'lg:mt-2',

        'lg:absolute',
        'lg:top-100',
        'lg:left-auto',
        'lg:right-0',
        'z-50',
      )}
    >
      <HeaderNavbarProfileDropdown
        className={clsx('w-full', 'lg:w-auto')}
        profile={profile}
      />
    </div>
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
  profile: {name: string; displayName: string; picture: string};
};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
