import {useAuth0} from '@auth0/auth0-react';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {Merge} from 'type-fest';
import {HeaderNavbarDropdownOpener} from '~/components/HeaderNavbarDropdownOpener';

export type ComponentProps = Merge<
  ContainerProps,
  {
    isAuthenticated: boolean;
    login(): void;
  }
>;
export const Component: React.FC<ComponentProps> = ({
  className,
  isAuthenticated,
  login,
}) => (
  <nav
    className={clsx(className, 'bg-blue-700', 'h-16', 'flex', 'items-center')}
  >
    <div className={clsx('container', 'flex', 'mx-auto')}>
      <div className={clsx('flex')}>
        <Link passHref href="/">
          <a>my-personal-comic-db</a>
        </Link>
      </div>
      <div className={clsx('flex', 'flex-grow')} />
      <div className={clsx('flex')}>
        {!isAuthenticated && (
          <button type="button" className={clsx('text-white')} onClick={login}>
            Login
          </button>
        )}
        {isAuthenticated && <HeaderNavbarDropdownOpener />}
      </div>
    </div>
  </nav>
);

export type ContainerProps = {
  className?: string;
};
export const Container: React.FC<ContainerProps> = (props) => {
  const {isAuthenticated, loginWithRedirect} = useAuth0();

  return (
    <Component
      {...props}
      isAuthenticated={isAuthenticated}
      login={loginWithRedirect}
    />
  );
};
