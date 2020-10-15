import {useAuth0} from '@auth0/auth0-react';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Merge} from 'type-fest';

export type ContainerProps = {
  className?: string;
};
export type Props = Merge<
  ContainerProps,
  {
    logout(): void;
    i18n: {
      [key in
        | 'profile'
        | 'readBooks'
        | 'readingBooks'
        | 'wishBooks'
        | 'settings'
        | 'signOut']: string;
    };
  }
>;

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

export const Component: React.FC<Props> = ({className, logout, i18n}) => (
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
      <MenuButton href="/profile">{i18n.profile}</MenuButton>
    </ul>
    <ul className={clsx()}>
      <MenuButton href="/user/read">{i18n.readBooks}</MenuButton>
      <MenuButton href="/user/reading">{i18n.readingBooks}</MenuButton>
      <MenuButton href="/user/wish">{i18n.wishBooks}</MenuButton>
    </ul>
    <ul className={clsx()}>
      <MenuButton href="/settings">{i18n.settings}</MenuButton>
      <MenuButton>
        <button type="button" onClick={logout}>
          {i18n.signOut}
        </button>
      </MenuButton>
    </ul>
  </div>
);

export const Dropdown: React.FC<ContainerProps> = (props) => {
  const {logout} = useAuth0();
  const {t, i18n} = useTranslation();

  return (
    <Component
      {...props}
      logout={logout}
      i18n={{
        profile: t('common:profile'),
        signOut: t('common:sign_out'),
        settings: t('common:settings'),
        readBooks: t('読んだ本'),
        readingBooks: t('読んでいる本'),
        wishBooks: t('読みたい本'),
      }}
    />
  );
};
