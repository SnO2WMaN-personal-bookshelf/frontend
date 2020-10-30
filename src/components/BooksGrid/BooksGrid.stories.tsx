import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import _105x148_ from '~~/.storybook/assets/105x148.png';
import _113x177_ from '~~/.storybook/assets/113x177.png';
import _128x182_ from '~~/.storybook/assets/128x182.png';
import _182x257_ from '~~/.storybook/assets/182x257.png';
import _210x297_ from '~~/.storybook/assets/210x297.png';
import _257x364_ from '~~/.storybook/assets/257x364.png';
import {Component} from '.';

const covers = {
  _105x148_,
  _113x177_,
  _128x182_,
  _182x257_,
  _210x297_,
  _257x364_,
};

export default {
  title: 'BooksGrid',
} as Meta;

export const Primary: Story = ({height, cols, ...args}) => (
  <Component
    className={clsx('w-full', `h-${height}`, `grid-cols-${cols}`, 'gap-x-4')}
    books={Object.keys([...Array(Number(cols))]).map((i) => ({
      id: i,
      title: `105x148`,
      cover: covers._105x148_,
    }))}
  />
);
Primary.argTypes = {
  height: {
    name: 'height',
    defaultValue: '64',
    control: {type: 'inline-radio', options: ['32', '40', '48', '64']},
  },
  cols: {
    name: 'cols',
    defaultValue: '6',
    control: {type: 'inline-radio', options: ['6', '7', '8']},
  },
};

export const WithDifferentSize: typeof Primary = ({height, cols, ...args}) => (
  <Component
    className={clsx('w-full', `h-${height}`, `grid-cols-${cols}`, 'gap-x-4')}
    books={[
      {
        id: '1',
        title: `113x177`,
        cover: _113x177_,
      },
      {
        id: '2',
        title: `128x182`,
        cover: _128x182_,
      },
      {
        id: '3',
        title: `105x148`,
        cover: _105x148_,
      },
      {
        id: '4',
        title: `182x257`,
        cover: _182x257_,
      },
      {
        id: '5',
        title: `210x297`,
        cover: _210x297_,
      },
      {
        id: '6',
        title: `257x364`,
        cover: _257x364_,
      },
    ]}
  />
);
WithDifferentSize.storyName = '複数の書影のサイズ';
WithDifferentSize.argTypes = Primary.argTypes;
