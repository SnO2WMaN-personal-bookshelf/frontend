import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {LayoutDefault} from '~/components/LayoutDefault';
import {Component, ComponentProps} from '.';

export default {
  title: 'Page/BookPage',
  component: Component,
  decorators: [
    (Story) => (
      <LayoutDefault>
        <Story />
      </LayoutDefault>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps> = ({...args}) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.storyName = '作者が1人の場合';
Primary.args = {
  className: clsx(),
  id: '5f9855bc0f0268ef33265aa5',
  title: 'チェンソーマン(1)',
  isbn: '978-4-08-881780-4',
  cover: 'https://cover.openbd.jp/9784088817804.jpg',
  authors: [
    {
      id: '5f9855bcb629d1a38d4cbd91',
      name: '藤本タツキ',
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
  ],
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
  ],
};
