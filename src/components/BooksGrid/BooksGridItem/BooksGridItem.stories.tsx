import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import _113x177_ from '~~/.storybook/assets/113x177.png';
import {Component, ComponentProps} from '.';

export default {
  title: 'BooksGrid/BooksGridItem',
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <div className={clsx('flex')}>
    <Component {...args} cover={_113x177_} />
  </div>
);
Primary.args = {
  className: clsx('h-48'),
  title: 'とある科学の超電磁砲(1)',
  href: '/books/1',
};
