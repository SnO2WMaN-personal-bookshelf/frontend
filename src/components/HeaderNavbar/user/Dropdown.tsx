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
import gql from 'graphql-tag';
import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {Merge} from 'type-fest';
import {useGetUserForHeaderNavDropdownQuery} from '~~/generated/graphql-codegen/apollo';
import {MenuButton, MenuLinkButton} from './MenuButton';

export const Query = gql`
  query GetUserForHeaderNavDropdown {
    currentUser {
      name
    }
  }
`;

export type ComponentProps = Merge<
  Props,
  {
    logout(): void;
    href: {
      profile?: string;
      readBooks: string;
      readingBooks: string;
      wishBooks: string;
      settings: string;
    };
    i18n: {
      [key in keyof ComponentProps['href'] | 'signOut']: string;
    };
  }
>;
export const ComponentBase: React.FC<ComponentProps> = ({
  className,
  logout,
  i18n,
  href,
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
      <MenuLinkButton icon={faUser} href={href.profile}>
        {i18n.profile}
      </MenuLinkButton>
    </ul>
    <ul className={clsx()}>
      <MenuLinkButton icon={faBook} href={href.readBooks}>
        {i18n.readBooks}
      </MenuLinkButton>
      <MenuLinkButton icon={faBookOpen} href={href.readingBooks}>
        {i18n.readingBooks}
      </MenuLinkButton>
      <MenuLinkButton icon={faBookmark} href={href.wishBooks}>
        {i18n.wishBooks}
      </MenuLinkButton>
    </ul>
    <ul className={clsx()}>
      <MenuLinkButton icon={faCog} href={href.settings}>
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

  const {data} = useGetUserForHeaderNavDropdownQuery();

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
      href={{
        profile: data && `/users/${data.currentUser.name}`,
        readBooks: '/read',
        readingBooks: '/reading',
        wishBooks: '/wish',
        settings: '/settings',
      }}
    />
  );
};
