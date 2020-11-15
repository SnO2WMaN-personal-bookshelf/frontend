import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component as PageLayout} from '~/components/Layout/PageLayout';
import {Component, ComponentProps} from '.';

export default {
  title: 'AuthorPage',
  component: Component,
  decorators: [
    (Story) => (
      <PageLayout>
        <Story />
      </PageLayout>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<ComponentProps> = ({...args}) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: '5f9855bcb629d1a38d4cbd91',
  name: '藤本タツキ',
  series: [
    {
      id: '5f9855bcf3f6883ecb8b7616',
      title: 'チェンソーマン',
      relatedAuthors: [
        {
          id: '5f9855bcb629d1a38d4cbd91',
          name: '藤本タツキ',
        },
      ],
      booksTotal: 8,
      books: [
        {
          id: '5f9855bc0f0268ef33265aa5',
          title: 'チェンソーマン(1)',
          cover: 'https://cover.openbd.jp/9784088817804.jpg',
        },
        {
          id: '5f9855bc0f0268ef33265aa6',
          title: 'チェンソーマン(2)',
          cover: 'https://cover.openbd.jp/9784088818313.jpg',
        },
        {
          id: '5f9855bc0f0268ef33265aa7',
          title: 'チェンソーマン(3)',
          cover: 'https://cover.openbd.jp/9784088820163.jpg',
        },
        {
          id: '5f9855bc0f0268ef33265aa8',
          title: 'チェンソーマン(4)',
          cover: 'https://cover.openbd.jp/9784088820750.jpg',
        },
        {
          id: '5f9855bc0f0268ef33265aa9',
          title: 'チェンソーマン(5)',
          cover: 'https://cover.openbd.jp/9784088821719.jpg',
        },
        {
          id: '5f9855bc0f0268ef33265aaa',
          title: 'チェンソーマン(6)',
          cover: 'https://cover.openbd.jp/9784088822242.jpg',
        },
        {
          id: '5f9855bc0f0268ef33265aab',
          title: 'チェンソーマン(7)',
          cover: 'https://cover.openbd.jp/9784088823287.jpg',
        },
        {
          id: '5f9855bc0f0268ef33265aac',
          title: 'チェンソーマン(8)',
          cover: 'https://cover.openbd.jp/9784088823768.jpg',
        },
      ],
    },
    {
      id: '5f9855bcf3f6883ecb8b7618',
      title: 'ファイアパンチ',
      relatedAuthors: [
        {
          id: '5f9855bcb629d1a38d4cbd91',
          name: '藤本タツキ',
        },
      ],
      booksTotal: 8,
      books: [
        {
          id: '5f985fefbdf98e7c4ca408ef',
          title: 'ファイアパンチ(1)',
          cover: 'https://cover.openbd.jp/9784088807317.jpg',
        },
        {
          id: '5f985fefbdf98e7c4ca408f0',
          title: 'ファイアパンチ(2)',
          cover: 'https://cover.openbd.jp/9784088807973.jpg',
        },
        {
          id: '5f985fefbdf98e7c4ca408f1',
          title: 'ファイアパンチ(3)',
          cover: 'https://cover.openbd.jp/9784088808734.jpg',
        },
        {
          id: '5f985fefbdf98e7c4ca408f2',
          title: 'ファイアパンチ(4)',
          cover: 'https://cover.openbd.jp/9784088810140.jpg',
        },
        {
          id: '5f985fefbdf98e7c4ca408f3',
          title: 'ファイアパンチ(5)',
          cover: 'https://cover.openbd.jp/9784088810614.jpg',
        },
        {
          id: '5f985fefbdf98e7c4ca408f4',
          title: 'ファイアパンチ(6)',
          cover: 'https://cover.openbd.jp/9784088811475.jpg',
        },
        {
          id: '5f985fefbdf98e7c4ca408f5',
          title: 'ファイアパンチ(7)',
          cover: 'https://cover.openbd.jp/9784088811703.jpg',
        },
        {
          id: '5f985fefbdf98e7c4ca408f6',
          title: 'ファイアパンチ(8)',
          cover: 'https://cover.openbd.jp/9784088813271.jpg',
        },
      ],
    },
  ],
  books: [
    {
      id: '5f985fefbdf98e7c4ca408ef',
      title: 'ファイアパンチ(1)',
      cover: 'https://cover.openbd.jp/9784088807317.jpg',
    },
    {
      id: '5f985fefbdf98e7c4ca408f0',
      title: 'ファイアパンチ(2)',
      cover: 'https://cover.openbd.jp/9784088807973.jpg',
    },
    {
      id: '5f985fefbdf98e7c4ca408f1',
      title: 'ファイアパンチ(3)',
      cover: 'https://cover.openbd.jp/9784088808734.jpg',
    },
    {
      id: '5f985fefbdf98e7c4ca408f2',
      title: 'ファイアパンチ(4)',
      cover: 'https://cover.openbd.jp/9784088810140.jpg',
    },
    {
      id: '5f985fefbdf98e7c4ca408f3',
      title: 'ファイアパンチ(5)',
      cover: 'https://cover.openbd.jp/9784088810614.jpg',
    },
    {
      id: '5f985fefbdf98e7c4ca408f4',
      title: 'ファイアパンチ(6)',
      cover: 'https://cover.openbd.jp/9784088811475.jpg',
    },
    {
      id: '5f985fefbdf98e7c4ca408f5',
      title: 'ファイアパンチ(7)',
      cover: 'https://cover.openbd.jp/9784088811703.jpg',
    },
    {
      id: '5f985fefbdf98e7c4ca408f6',
      title: 'ファイアパンチ(8)',
      cover: 'https://cover.openbd.jp/9784088813271.jpg',
    },
    {
      id: '5f9855bc0f0268ef33265aa5',
      title: 'チェンソーマン(1)',
      cover: 'https://cover.openbd.jp/9784088817804.jpg',
    },
    {
      id: '5f9855bc0f0268ef33265aa6',
      title: 'チェンソーマン(2)',
      cover: 'https://cover.openbd.jp/9784088818313.jpg',
    },
    {
      id: '5f9855bc0f0268ef33265aa7',
      title: 'チェンソーマン(3)',
      cover: 'https://cover.openbd.jp/9784088820163.jpg',
    },
    {
      id: '5f9855bc0f0268ef33265aa8',
      title: 'チェンソーマン(4)',
      cover: 'https://cover.openbd.jp/9784088820750.jpg',
    },
    {
      id: '5f9855bc0f0268ef33265aa9',
      title: 'チェンソーマン(5)',
      cover: 'https://cover.openbd.jp/9784088821719.jpg',
    },
    {
      id: '5f9855bc0f0268ef33265aaa',
      title: 'チェンソーマン(6)',
      cover: 'https://cover.openbd.jp/9784088822242.jpg',
    },
    {
      id: '5f9855bc0f0268ef33265aab',
      title: 'チェンソーマン(7)',
      cover: 'https://cover.openbd.jp/9784088823287.jpg',
    },
    {
      id: '5f9855bc0f0268ef33265aac',
      title: 'チェンソーマン(8)',
      cover: 'https://cover.openbd.jp/9784088823768.jpg',
    },
  ],
};
