import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {LayoutDefault} from '~/components/LayoutDefault';
import _113x177_ from '~~/.storybook/assets/113x177.png';
import {Component, ComponentProps} from '.';

export default {
  title: 'Page/SeriesPage',
  component: Component,
  decorators: [
    (Story) => (
      <LayoutDefault>
        <Story />
      </LayoutDefault>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<ComponentProps> = ({...args}) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: '5f9855bcf3f6883ecb8b7616',
  title: '侵略！イカ娘',
  concluded: true,
  relatedAuthors: [
    {
      id: '5f9855bcb629d1a38d4cbd91',
      name: '安部真弘',
    },
  ],
  booksTotal: 22,
  books: Object.keys([...Array(20)]).map((i) => ({
    id: i,
    title: `113x177`,
    cover: _113x177_,
  })),
};
