import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'BookPage/RegisterButtons/Form',
  component: Component,
} as Meta;
const Template: Story<ComponentProps> = ({...args}) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {title: 'チェンソーマン(1)'};
