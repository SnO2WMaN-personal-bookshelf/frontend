---
to: <%= abs_path %>/<%= component_name %>.tsx
---
import React from "react";
import clsx from 'clsx';
import {Merge} from 'type-fest';

export type ComponentProps = Merge<
  Pick<
    Props,
    'className'
  >,
  unknown
>;
export const Component: React.FC<ComponentProps> = ({className}) => (
  <<%= tag %> className={clsx(className)}>
  </<%= tag %>>
);

export type Props = {
  className?: string;
};
export const <%= component_name %>: React.FC<Props> = (props) => {
  return (
    <Component {...props} />
  );
};
