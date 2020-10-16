import {useAuth0} from '@auth0/auth0-react';
import {
  faBook,
  faBookmark,
  faBookOpen,
  faCog,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {Merge} from 'type-fest';
import {MenuButton, MenuLinkButton} from './MenuButton';

export type ComponentProps = Merge<
  Props,
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
export const ComponentBase: React.FC<ComponentProps> = ({
  className,
  logout,
  i18n,
}) => (
  <div
    className={clsx(
      className,
      'bg-white',
      'bg-opacity-75',
      'border',
      'border-opacity-75',
      'divide-y',
      'divide-opacity-75',
      'shadow-lg',
      'rounded',
      'overflow-hidden',
    )}
  >
    <ul className={clsx()}>
      <MenuLinkButton icon={faUser} href="/profile">
        {i18n.profile}
      </MenuLinkButton>
    </ul>
    <ul className={clsx()}>
      <MenuLinkButton icon={faBook} href="/user/read">
        {i18n.readBooks}
      </MenuLinkButton>
      <MenuLinkButton icon={faBookOpen} href="/user/reading">
        {i18n.readingBooks}
      </MenuLinkButton>
      <MenuLinkButton icon={faBookmark} href="/user/wish">
        {i18n.wishBooks}
      </MenuLinkButton>
    </ul>
    <ul className={clsx()}>
      <MenuLinkButton icon={faCog} href="/settings">
        {i18n.settings}
      </MenuLinkButton>
      <MenuButton icon={faSignOutAlt} onClick={logout}>
        {i18n.signOut}
      </MenuButton>
    </ul>
  </div>
);

export const Component = styled(ComponentBase)`
  backdrop-filter: blur(2px);
`;

export type Props = {className?: string};
export const Dropdown: React.FC<Props> = (props) => {
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
