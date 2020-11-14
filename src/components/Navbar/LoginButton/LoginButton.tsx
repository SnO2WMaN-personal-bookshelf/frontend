import {useAuth0} from '@auth0/auth0-react';
import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
  onClick(): void;
};
export const Component: React.FC<ComponentProps> = ({className, onClick}) => (
  <button
    type="button"
    className={clsx(
      className,
      'px-4',
      'py-2',
      'bg-teal-400',
      'text-white',
      'rounded-lg',
    )}
    onClick={onClick}
  >
    Login
  </button>
);

export type ContainerProps = {
  className?: string;
};
export const Container: React.FC<ContainerProps> = (props) => {
  const {isAuthenticated, loginWithRedirect} = useAuth0();
  return <Component {...props} onClick={loginWithRedirect} />;
};
