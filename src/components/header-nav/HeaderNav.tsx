import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {Merge} from 'type-fest';
import {useFetchUser} from '~/lib/user';
import {User} from './user/User';

export type ContainerProps = {
  className?: string;
};
export type Props = Merge<
  ContainerProps,
  {
    isLogin: boolean;
    user?: {
      image: string;
      name: string;
    };
  }
>;

export const Component: React.FC<Props> = ({className, isLogin, user}) => (
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
        {!isLogin && (
          <a className={clsx('text-white')} href="/api/login">
            Login
          </a>
        )}
        {isLogin && user && <User user={user} />}
      </div>
    </div>
  </nav>
);

export const HeaderNav: React.FC<ContainerProps> = ({...props}) => {
  const {user} = useFetchUser();

  return (
    <Component
      {...props}
      isLogin={Boolean(user)}
      user={
        user && {
          name: user.nickname,
          image: user.picture,
        }
      }
    />
  );
};
