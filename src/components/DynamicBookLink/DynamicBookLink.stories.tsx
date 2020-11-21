import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import _113x177_ from '~~/.storybook/assets/113x177.png';
import {Component, ComponentProps} from '.';

export default {
  title: 'DynamicBookLink',
  component: Component,
  decorators: [
    (Story) => (
      <div className={clsx('flex', 'justify-start', 'items-start')}>
        <Story />
      </div>
    ),
  ],
} as Meta;
const Template: Story<ComponentProps> = ({...args}) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: clsx('h-48'),
  title: 'とある科学の超電磁砲(1)',
  cover: _113x177_,
  href: '/books/1',
};
