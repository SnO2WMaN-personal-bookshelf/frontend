import {faUser} from '@fortawesome/free-solid-svg-icons';
import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'Navbar/Profile/Dropdown/Button',
  component: Component,
  decorators: [
    (Story) => (
      <div className={clsx('flex')}>
        <div className={clsx('flex', 'flex-col')}>
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta;
const Template: Story<ComponentProps> = ({...args}) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: faUser,
  href: '/profile',
  text: 'プロフイール',
};
