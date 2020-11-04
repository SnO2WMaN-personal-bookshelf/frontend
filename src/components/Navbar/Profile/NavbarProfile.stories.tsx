import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'Navbar/Profile',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className={clsx('w-full', 'max-w-screen-sm', 'flex')}>
        <div className={clsx('flex-grow')} />
        <Story />
      </div>
    ),
  ],
} as Meta;
const Template: Story<ComponentProps> = ({...args}) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  profile: {
    picture: 'https://avatars3.githubusercontent.com/u/15155608?v=4',
    name: 'SnO2WMaN',
    displayName: 'SnO2WMaN',
  },
};
