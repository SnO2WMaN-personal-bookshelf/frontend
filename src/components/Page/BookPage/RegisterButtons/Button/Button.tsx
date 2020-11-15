import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
  text: string;
  icon: IconDefinition;
  onClick(): void;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  text,
  icon,
  onClick,
}) => (
  <button
    type="button"
    className={clsx(
      className,
      'bg-blue-500',
      'text-white',
      'rounded',
      'px-4',
      'py-2',
      'flex',
      'items-center',
    )}
    onClick={onClick}
  >
    <FontAwesomeIcon className={clsx('mr-2')} icon={icon} fixedWidth />
    <span>{text}</span>
  </button>
);

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
