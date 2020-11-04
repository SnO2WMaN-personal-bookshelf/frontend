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
import {HeaderNavbarProfileDropdownButton} from '~/components/Navbar/Profile/Dropdown/Button';

export type ComponentProps = {
  className?: string;
  href: {
    profile?: string;
    readBooks: string;
    readingBooks: string;
    wishBooks: string;
    settings: string;
    logout: string;
  };
  i18n: {
    profile: string;
    readBooks: string;
    readingBooks: string;
    wishBooks: string;
    settings: string;
    logout: string;
  };
};
export const ComponentBase: React.FC<ComponentProps> = ({
  className,
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
      'rounded-none',
      'lg:rounded',
      'flex',
      'flex-col',
    )}
  >
    {href.profile && (
      <HeaderNavbarProfileDropdownButton
        icon={faUser}
        href={href.profile}
        text={i18n.profile}
      />
    )}
    <HeaderNavbarProfileDropdownButton
      icon={faBook}
      href={href.readBooks}
      text={i18n.readBooks}
    />
    <HeaderNavbarProfileDropdownButton
      icon={faBookOpen}
      href={href.readingBooks}
      text={i18n.readingBooks}
    />
    <HeaderNavbarProfileDropdownButton
      icon={faBookmark}
      href={href.wishBooks}
      text={i18n.wishBooks}
    />
    <HeaderNavbarProfileDropdownButton
      icon={faCog}
      href={href.settings}
      text={i18n.settings}
    />
    <HeaderNavbarProfileDropdownButton
      icon={faSignOutAlt}
      href={href.logout}
      text={i18n.logout}
    />
  </div>
);
export const Component = styled(ComponentBase)`
  backdrop-filter: blur(2px);
`;

export type ContainerProps = {
  className?: string;
  profile: {
    name: string;
  };
};
export const Container: React.FC<ContainerProps> = ({
  profile: user,
  ...props
}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      i18n={{
        profile: t('common:profile'),
        logout: t('common:sign_out'),
        settings: t('common:settings'),
        readBooks: t('読んだ本'),
        readingBooks: t('読んでいる本'),
        wishBooks: t('読みたい本'),
      }}
      href={{
        profile: user.name && `/users/${user.name}`,
        readBooks: '/read',
        readingBooks: '/reading',
        wishBooks: '/wish',
        settings: '/settings',
        logout: '/logout',
      }}
    />
  );
};
