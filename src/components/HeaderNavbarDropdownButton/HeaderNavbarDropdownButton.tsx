import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {Merge} from 'type-fest';

const Content: React.FC<Pick<ComponentProps, 'icon'>> = ({icon, children}) => (
  <div className={clsx('w-full', 'px-5', 'py-3', 'text-left')}>
    <FontAwesomeIcon icon={icon} fixedWidth className={clsx('mr-2')} />
    {children}
  </div>
);

export type ComponentProps = Merge<ContainerProps, unknown>;
export const Component: React.FC<ComponentProps> = ({
  children,
  href,
  className,
  icon,
}) => (
  <li
    className={clsx(
      className,
      'flex',
      'text-sm',
      'text-gray-800',
      'hover:bg-blue-500',
      'hover:text-white',
      'whitespace-no-wrap',
      'duration-50',
    )}
  >
    {href && (
      <Link href={href} passHref>
        <a className={clsx('w-full')}>
          <Content icon={icon}>{children}</Content>
        </a>
      </Link>
    )}
    {!href && <Content icon={icon}>{children}</Content>}
  </li>
);

export type ContainerProps = {
  className?: string;
  icon: IconDefinition;
  href?: string;
};
export const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
