import {useAuth0} from '@auth0/auth0-react';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {Merge} from 'type-fest';

export type ContainerProps = {
  className?: string;
};
export type Props = Merge<ContainerProps, {logout(): void}>;

export const MenuButton: React.FC<{
  className?: string;

  href?: string;
}> = ({children, href, className}) => (
  <li
    className={clsx(className, 'flex', 'hover:bg-blue-500', 'hover:text-white')}
  >
    {href && (
      <Link href={href} passHref>
        <a
          className={clsx(
            'w-full',
            'px-6',
            'py-2',
            'text-sm',
            'whitespace-no-wrap',
          )}
        >
          {children}
        </a>
      </Link>
    )}
    {!href && <>{children}</>}
  </li>
);

export const Component: React.FC<Props> = ({className, logout}) => (
  <div
    className={clsx(
      className,
      'bg-white',
      'shadow-lg',
      'rounded',
      'border',
      'divide-y',
      'overflow-hidden',
    )}
  >
    <ul className={clsx()}>
      <MenuButton href="/profile">プロフィール</MenuButton>
    </ul>
    <ul className={clsx()}>
      <MenuButton href="/user/read">読んだ本</MenuButton>
      <MenuButton href="/user/reading">読んでいる本</MenuButton>
      <MenuButton href="/user/wish">読みたい本</MenuButton>
    </ul>
    <ul className={clsx()}>
      <MenuButton href="/settings">設定</MenuButton>
      <MenuButton>
        <button type="button" onClick={logout}>
          ログアウト
        </button>
      </MenuButton>
    </ul>
  </div>
);

export const Dropdown: React.FC<ContainerProps> = (props) => {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return <Component {...props} logout={logout} />;
};
