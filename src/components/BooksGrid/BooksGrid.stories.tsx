import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import _105x148_ from '~~/.storybook/assets/105x148.png';
import _113x177_ from '~~/.storybook/assets/113x177.png';
import _128x182_ from '~~/.storybook/assets/128x182.png';
import _182x257_ from '~~/.storybook/assets/182x257.png';
import _210x297_ from '~~/.storybook/assets/210x297.png';
import _257x364_ from '~~/.storybook/assets/257x364.png';
import {Component, ComponentProps} from '.';

export default {
  title: 'BooksGrid',
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component
    {...args}
    books={Object.keys([...Array(6)]).map((i) => ({
      id: i,
      title: `とある科学の超電磁砲(${Number(i) + 1})`,
      cover: _113x177_,
    }))}
  />
);
Primary.args = {
  className: clsx('w-full', 'h-64', 'grid-cols-6', 'gap-x-4'),
};

export const WithDifferentSize: Story<ComponentProps> = (args) => (
  <Component
    {...args}
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
WithDifferentSize.args = {
  className: clsx('w-full', 'h-64', 'grid-cols-6', 'gap-x-4'),
};
