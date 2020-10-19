import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import React, {DOMAttributes} from 'react';

export const MenuButtonOutline: React.FC<{
  className?: string;
}> = ({children, className}) => (
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
    {children}
  </li>
);

export const MenuLinkButton: React.FC<{
  className?: string;
  icon: IconDefinition;
  href?: string;
}> = ({children, href, className, icon}) => {
  const contents = (
    <div className={clsx('w-full', 'px-5', 'py-3', 'text-left')}>
      <FontAwesomeIcon icon={icon} fixedWidth className={clsx('mr-2')} />
      {children}
    </div>
  );
  return (
    <MenuButtonOutline className={className}>
      {href && (
        <Link href={href} passHref>
          <a className={clsx('w-full')}>{contents}</a>
        </Link>
      )}
      {!href && contents}
    </MenuButtonOutline>
  );
};

export const MenuButton: React.FC<{
  className?: string;
  icon: IconDefinition;
  onClick: DOMAttributes<HTMLButtonElement>['onClick'];
}> = ({children, onClick, className, icon}) => (
  <MenuButtonOutline className={className}>
    <button
      className={clsx('w-full', 'px-5', 'py-3', 'text-left')}
      type="button"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} fixedWidth className={clsx('mr-2')} />
      {children}
    </button>
  </MenuButtonOutline>
);
