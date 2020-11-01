import clsx from 'clsx';
import {useRouter} from 'next/router';
import React from 'react';
import {Spinner} from '~/components/Spinner/Spinner';

export type ComponentProps = {className?: string};
export const Component: React.FC<ComponentProps> = ({className, children}) => (
  <div
    className={clsx(
      className,
      'container',
      'mx-auto',
      'shadow',
      'px-8',
      'py-16',
      'bg-white',
    )}
  >
    {children}
  </div>
);

export type ContainerProps = {className?: string};
export const Container: React.FC<ContainerProps> = ({children, ...props}) => {
  const router = useRouter();

  return (
    <Component {...props}>
      {router.isFallback && <Spinner />}
      {!router.isFallback && children}
    </Component>
  );
};
