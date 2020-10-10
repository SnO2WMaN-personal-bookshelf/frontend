import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export type ContainerProps = {
  className?: string;
};
export type Props = ContainerProps;

export const MenuButton: React.FC<{
  className?: string;

  href: string;
}> = ({children, href, className}) => (
  <li
    className={clsx(className, 'flex', 'hover:bg-blue-500', 'hover:text-white')}
  >
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
  </li>
);

export const Component: React.FC<Props> = ({className}) => (
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
      <MenuButton href="/read">読んだ本</MenuButton>
      <MenuButton href="/reading">読んでいる本</MenuButton>
      <MenuButton href="/wish">読みたい本</MenuButton>
    </ul>
    <ul className={clsx()}>
      <MenuButton href="/settings">設定</MenuButton>
      <MenuButton href="/api/logout">ログアウト</MenuButton>
    </ul>
  </div>
);

export const Dropdown: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
