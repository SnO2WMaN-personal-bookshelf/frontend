import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'BookPage/RegisterButtons',
  component: Component,
} as Meta;
const Template: Story<ComponentProps> = ({...args}) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  i18n: {
    read: '読んだ本',
    reading: '呼んでいる本',
    wish: '読みたい本',
  },
};
