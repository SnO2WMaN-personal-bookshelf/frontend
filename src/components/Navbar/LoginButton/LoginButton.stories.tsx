import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'Navbar/LoginButton',
  component: Component,
} as Meta;
const Template: Story<ComponentProps> = ({...args}) => <Component {...args} />;

export const Japanese = Template.bind({});
Japanese.storyName = '日本語';
Japanese.args = {
  i18n: {login: 'ログイン'},
};

export const English = Template.bind({});
English.storyName = '英語';
English.args = {
  i18n: {login: 'Login'},
};
