import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'Navbar/Profile/Dropdown',
  component: Component,
  decorators: [
    (Story) => (
      <div className={clsx('flex')}>
        <Story />
      </div>
    ),
  ],
} as Meta;
const Template: Story<ComponentProps> = ({...args}) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: {
    profile: '/profile',
    readBooks: '/read',
    readingBooks: '/reading',
    wishBooks: '/wish',
    settings: '/settings',
    logout: '/logout',
  },
  i18n: {
    profile: 'プロフイール',
    readBooks: '読んだ本',
    readingBooks: '読んでいる本',
    wishBooks: '読みたい本',
    settings: '設定',
    logout: 'ログアウト',
  },
};
