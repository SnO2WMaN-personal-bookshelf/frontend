// eslint-disable-next-line import/no-extraneous-dependencies
import {action} from '@storybook/addon-actions';
import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'Navbar/NavbarSearchBox',
  component: Component,
  argTypes: {onChange: {action: 'change input'}},
} as Meta;
const Template: Story<ComponentProps> = ({...args}) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: clsx('w-96'),
  handleChange: action('change-input'),
  clear: action('clear'),
  i18n: {
    input: {placeholder: '探したい本や作者を入力', label: '入力'},
    clearButton: {label: '消去'},
  },
  input: '',
};
