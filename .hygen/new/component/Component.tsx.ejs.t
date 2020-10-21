---
to: <%= abs_path %>/<%= component_name %>.tsx
---
import React from "react";
import clsx from 'clsx';
import {Merge} from 'type-fest';

export type ComponentProps = Merge<ContainerProps, unknown>;
export const Component: React.FC<ComponentProps> = ({className}) => (
  <<%= tag %> className={clsx(className)}>
  </<%= tag %>>
);

export type ContainerProps = {
  className?: string;
};
export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <Component {...props} />
  );
};
