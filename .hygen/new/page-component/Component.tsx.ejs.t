---
to: <%= abs_path %>/<%= component_name %>.tsx
---
import React from "react";
import clsx from 'clsx';
import {Merge} from 'type-fest';

export type ComponentProps = {
  className?: string;
};
export const Component: React.FC<ComponentProps> = ({className}) => (
  <main className={clsx(className)} />
);

export type ContainerProps = {
  className?: string;
};
export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <Component {...props} />
  );
};
