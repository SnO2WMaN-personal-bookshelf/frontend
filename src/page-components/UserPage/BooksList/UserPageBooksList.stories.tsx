import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'UserPage/BooksList',
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
  i18n: {
    title: '読んだ本',
  },
  books: [
    {
      id: '112e7c00bdb0499bd4b65c49a3decefb',
      title: 'ファイアパンチ(1)',
      cover: 'https://cover.openbd.jp/9784088807317.jpg',
    },
    {
      id: 'e2bc3a47fd0a1b9c489e156f758da134',
      title: 'ファイアパンチ(2)',
      cover: 'https://cover.openbd.jp/9784088807973.jpg',
    },
    {
      id: '6135efd62afc6322a300f4ceb999c834',
      title: 'ファイアパンチ(3)',
      cover: 'https://cover.openbd.jp/9784088808734.jpg',
    },
    {
      id: '97bbb8e490ebad1356b038744a6cecab',
      title: 'ファイアパンチ(4)',
      cover: 'https://cover.openbd.jp/9784088810140.jpg',
    },
    {
      id: 'a77681d97f8835b2a2750d65833a3f3e',
      title: 'ファイアパンチ(5)',
      cover: 'https://cover.openbd.jp/9784088810614.jpg',
    },
    {
      id: '5cedaa5e0d1748813da97452f2ecb09f',
      title: 'ファイアパンチ(6)',
      cover: 'https://cover.openbd.jp/9784088811475.jpg',
    },
    {
      id: '324b8ba61f5f3c0cc41e96aaf3e1c933',
      title: 'ファイアパンチ(7)',
      cover: 'https://cover.openbd.jp/9784088811703.jpg',
    },

    {
      id: 'a7337e346efff5a5c4d8ae1fae8ffdc1',
      title: 'ファイアパンチ(8)',
      cover: 'https://cover.openbd.jp/9784088813271.jpg',
    },
  ],
};
