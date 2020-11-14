import {useAuth0} from '@auth0/auth0-react';
import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';

export type ComponentProps = {
  className?: string;
  onClick(): void;
  i18n: {login: string};
};
export const Component: React.FC<ComponentProps> = ({
  className,
  onClick,
  i18n,
}) => (
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
    <span>{i18n.login}</span>
  </button>
);

export type ContainerProps = {
  className?: string;
};
export const Container: React.FC<ContainerProps> = (props) => {
  const {t} = useTranslation();
  const {loginWithRedirect} = useAuth0();
  return (
    <Component
      {...props}
      onClick={loginWithRedirect}
      i18n={{login: t('common:sign_in')}}
    />
  );
};
