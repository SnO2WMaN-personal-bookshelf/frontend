import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'UserPage/Menu',
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
  readBooksTotal: 999,
  readingBooksTotal: 666,
  wishBooksTotal: 333,
  i18n: {
    readBooks: '読んだ本',
    readingBooks: '読んでいる本',
    wishBooks: '読みたい本',
  },
};
