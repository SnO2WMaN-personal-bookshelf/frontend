import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {LayoutDefault} from '~/components/LayoutDefault';
import {Spinner} from '~/components/Spinner/Spinner';

export type ComponentProps = Merge<ContainerProps, unknown>;
export const Component: React.FC<ComponentProps> = ({className}) => (
  <LayoutDefault>
    <Spinner className={clsx('text-blue-400', 'text-4xl')} />
  </LayoutDefault>
);

export type ContainerProps = {
  className?: string;
};
export const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
