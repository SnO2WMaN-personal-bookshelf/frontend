import {useAuth0} from '@auth0/auth0-react';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {Merge} from 'type-fest';
import {User} from './user/User';

export type ContainerProps = {
  className?: string;
};
export type Props = Merge<
  ContainerProps,
  {
    login(): void;
    isAuthenticated: boolean;
  }
>;

export const Component: React.FC<Props> = ({
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
        {isAuthenticated && <User />}
      </div>
    </div>
  </nav>
);

export const HeaderNav: React.FC<ContainerProps> = ({...props}) => {
  const {isAuthenticated, user, loginWithRedirect} = useAuth0();

  return (
    <Component
      {...props}
      isAuthenticated={isAuthenticated}
      login={loginWithRedirect}
    />
  );
};
