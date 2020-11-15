import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component as PageLayout} from '~/components/Layout/PageLayout';
import {Component, ComponentProps} from '.';

export default {
  title: 'UserPage',
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
  name: 'SnO2WMaN',
  displayName: 'SnO2WMaN',
  picture: 'https://avatars3.githubusercontent.com/u/15155608?v=4',
  readBooks: {
    id: '1',
    total: 11,
    books: [
      {
        id: '7f635265e18c51a1da0ce513a586eb96',
        title: 'だがしかし(1)',
        cover: 'https://cover.openbd.jp/9784091251251.jpg',
      },
      {
        id: '82871cd42093a387916f636c4ec6ef0f',
        title: 'だがしかし(2)',
        cover: 'https://cover.openbd.jp/9784091253996.jpg',
      },
      {
        id: '0006f901375d3f09c6cfd75300a22910',
        title: 'だがしかし(3)',
        cover: 'https://cover.openbd.jp/9784091262103.jpg',
      },
      {
        id: '77d68dd90238cdff13e266ce39788d4d',
        title: 'だがしかし(4)',
        cover: 'https://cover.openbd.jp/9784091265708.jpg',
      },
      {
        id: '06649e9a60ebfcfdfb5a7ce75deefe5b',
        title: 'だがしかし(5)',
        cover: 'https://cover.openbd.jp/9784091271600.jpg',
      },
      {
        id: 'b05a26d8f172f3588d6fbcc7e6eee3f2',
        title: 'だがしかし(6)',
        cover: 'https://cover.openbd.jp/9784091274083.jpg',
      },
      {
        id: '43194dadda660b3ce3103b3e52a7beae',
        title: 'だがしかし(7)',
        cover: 'https://cover.openbd.jp/9784091275134.jpg',
      },
      {
        id: 'ef380928c8ea69863e98dc2f57e03418',
        title: 'だがしかし(8)',
        cover: 'https://cover.openbd.jp/9784091276810.jpg',
      },
      {
        id: 'a71bf429df07bcb0d1a845ede7b213d2',
        title: 'だがしかし(10)',
        cover: 'https://cover.openbd.jp/9784091280831.jpg',
      },
      {
        id: '15fc53d4b5f331f89e07bdbaeb58e534',
        title: 'だがしかし(11)',
        cover: 'https://cover.openbd.jp/9784091282477.jpg',
      },
    ],
  },
  readingBooks: {
    id: '2',
    total: 5,
    books: [
      {
        id: 'fede29d40a8d777865861a86949d92f4',
        title: 'よふかしのうた(1)',
        cover: 'https://cover.openbd.jp/9784091294920.jpg',
      },
      {
        id: '26900a2bc7d7d5df6cd5a537eaf4fa67',
        title: 'よふかしのうた(2)',
        cover: 'https://cover.openbd.jp/9784091295569.jpg',
      },
      {
        id: '848598905d862c7e6e73656c7198a13b',
        title: 'よふかしのうた(3)',
        cover: 'https://cover.openbd.jp/9784098500642.jpg',
      },
      {
        id: '7eddc767b3e8d9b0d70d61f9ce8b048d',
        title: 'よふかしのうた(4)',
        cover: 'https://cover.openbd.jp/9784098500642.jpg',
      },
      {
        id: '504435d20a20eb25379a93d5860e763f',
        title: 'よふかしのうた(5)',
        cover: 'https://cover.openbd.jp/9784098502684.jpg',
      },
    ],
  },
  wishBooks: {
    id: '3',
    total: 8,
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
  },
  i18n: {
    readBooks: '読んだ本',
    readingBooks: '読んでいる本',
    wishBooks: '読みたい本',
  },
};
