import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export type ComponentProps = {
  className?: string;
  href: string;
  text: string;
  icon: IconDefinition;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  icon,
  text,
  href,
}) => (
  <div className={clsx(className, 'w-full', 'select-none')}>
    <Link href={href}>
      <a
        className={clsx(
          'group',
          'transition-colors',
          'duration-75',
          'hover:bg-teal-500',
          'px-6',
          'py-4',
          'lg:py-3',
          'flex',
          'items-center',
        )}
      >
        <FontAwesomeIcon
          icon={icon}
          fixedWidth
          className={clsx(
            'text-sm',
            'transition-colors',
            'duration-75',
            'group-hover:text-white',
            'mr-4',
          )}
        />
        <p
          className={clsx(
            'text-sm',
            'transition-colors',
            'duration-75',
            'group-hover:text-white',
            'whitespace-no-wrap',
          )}
        >
          {text}
        </p>
      </a>
    </Link>
  </div>
);

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
