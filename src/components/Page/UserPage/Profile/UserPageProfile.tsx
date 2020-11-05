import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
  name: string;
  displayName: string;
  picture: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  picture,
  name,
  displayName,
}) => (
  <section className={clsx(className)}>
    <div
      className={clsx(
        'w-full',
        'max-w-screen-lg',
        'mx-auto',
        'flex',
        'items-center',
      )}
    >
      <div className={clsx('mr-4')}>
        <img
          src={picture}
          alt={displayName}
          className={clsx('w-32', 'h-32', 'rounded-lg')}
        />
      </div>
      <div className={clsx('flex', 'flex-col')}>
        <p className={clsx('select-all', 'text-2xl')}>{displayName}</p>
        <p className={clsx('select-all', 'text-gray-600')}>@{name}</p>
      </div>
    </div>
  </section>
);

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
