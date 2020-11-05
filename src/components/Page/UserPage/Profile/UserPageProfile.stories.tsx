import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'UserPage/Profile',
  component: Component,
  decorators: [
    (Story) => (
      <div className={clsx('container')}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;
const Template: Story<ComponentProps> = ({...args}) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'SnO2WMaN',
  displayName: 'SnO2WMaN',
  picture: 'https://avatars3.githubusercontent.com/u/15155608?v=4',
};
