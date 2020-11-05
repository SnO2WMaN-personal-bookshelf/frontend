import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;

  total: number;
  text: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  total,
  text,
}) => (
  <div className={clsx(className, 'flex', 'items-center', 'px-4', 'py-2')}>
    <span className={clsx('text-lg', 'mr-2')}>{text}</span>
    <span
      className={clsx(
        'bg-teal-500',
        'text-white',
        'font-mono',
        'px-2',
        'rounded-lg',
      )}
    >
      {total}
    </span>
  </div>
);

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
