import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';

export type ComponentProps = Merge<ContainerProps, unknown>;
export const Component: React.FC<ComponentProps> = ({className, children}) => (
  <main className={clsx(className, 'container', 'mx-auto')}>{children}</main>
);

export type ContainerProps = {
  className?: string;
};
export const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
