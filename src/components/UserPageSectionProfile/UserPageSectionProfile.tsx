import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';

export type ComponentProps = Merge<Props, unknown>;
export const Component: React.FC<ComponentProps> = ({
  className,
  picture,
  name,
  displayName,
}) => (
  <section
    className={clsx(
      className,
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
      <span className={clsx('text-2xl')}>{displayName}</span>
      <span className={clsx('text-gray-600')}>@{name}</span>
    </div>
  </section>
);

export type Props = {
  className?: string;
  picture: string;
  name: string;
  displayName: string;
};
export const Container: React.FC<Props> = (props) => {
  return <Component {...props} />;
};
