---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---
import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: '<%= parent_directory ? `${parent_directory}/${component_name}` : component_name %>',
  component: Component,
} as Meta;
const Template: Story<ComponentProps> = ({...args}) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
