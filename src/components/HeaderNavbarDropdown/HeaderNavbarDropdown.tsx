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
import {HeaderNavbarDropdownButton} from '~/components/HeaderNavbarDropdownButton';

export type ComponentProps = Merge<
  Pick<ContainerProps, 'className'>,
  {
    href: {
      profile?: string;
      readBooks: string;
      readingBooks: string;
      wishBooks: string;
      settings: string;
      logout: string;
    };
    i18n: Required<
      {
        [key in keyof ComponentProps['href']]: string;
      }
    >;
  }
>;
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
      'shadow-lg',
      'rounded',
      'overflow-hidden',
    )}
  >
    <ul className={clsx()}>
      <HeaderNavbarDropdownButton icon={faUser} href={href.profile}>
        {i18n.profile}
      </HeaderNavbarDropdownButton>
    </ul>
    <ul className={clsx()}>
      <HeaderNavbarDropdownButton icon={faBook} href={href.readBooks}>
        {i18n.readBooks}
      </HeaderNavbarDropdownButton>
      <HeaderNavbarDropdownButton icon={faBookOpen} href={href.readingBooks}>
        {i18n.readingBooks}
      </HeaderNavbarDropdownButton>
      <HeaderNavbarDropdownButton icon={faBookmark} href={href.wishBooks}>
        {i18n.wishBooks}
      </HeaderNavbarDropdownButton>
    </ul>
    <ul className={clsx()}>
      <HeaderNavbarDropdownButton icon={faCog} href={href.settings}>
        {i18n.settings}
      </HeaderNavbarDropdownButton>
      <HeaderNavbarDropdownButton icon={faSignOutAlt} href={href.logout}>
        {i18n.logout}
      </HeaderNavbarDropdownButton>
    </ul>
  </div>
);
export const Component = styled(ComponentBase)`
  backdrop-filter: blur(2px);
`;

export type ContainerProps = {
  className?: string;
  user: {
    name?: string;
  };
};
export const Container: React.FC<ContainerProps> = ({user, ...props}) => {
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
