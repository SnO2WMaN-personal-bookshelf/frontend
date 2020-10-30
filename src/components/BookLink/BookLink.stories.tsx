import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from '.';

export default {
  title: 'BookLink',
} as Meta;

const Template: Story<ComponentProps> = (args) => <Component {...args} />;

export const SpecifyHeight = Template.bind({});
SpecifyHeight.storyName = '書影の高さを指定';
SpecifyHeight.args = {
  imageClassName: clsx('h-48'),
  title: 'タイトル',
  href: '/books/1',
  cover: '/default_cover.png',
};

export const SpecifyWidth = Template.bind({});
SpecifyWidth.storyName = '書影の横幅を指定';
SpecifyWidth.args = {
  imageClassName: clsx('w-32'),
  title: 'タイトル',
  href: '/books/1',
  cover: '/default_cover.png',
};

export const LineUpWithFlexbox: Story<ComponentProps> = ({
  className,
  imageClassName,
}) => (
  <div className={clsx('flex', 'space-x-4')}>
    {[...Array(2)].map((i) => (
      <Component
        key={i}
        className={className}
        imageClassName={imageClassName}
        title="タイトル"
        href="/books/1"
        cover="/default_cover.png"
      />
    ))}
  </div>
);
LineUpWithFlexbox.storyName = 'FlexBoxで並べる';
LineUpWithFlexbox.args = {
  imageClassName: clsx('h-48'),
};

export const LineUpWithFlexboxOverWidth: Story<ComponentProps> = ({
  className,
  imageClassName,
}) => (
  <div
    className={clsx(
      'w-full',
      'overflow-x-scroll',
      'flex',
      'flex-no-wrap',
      'space-x-4',
    )}
  >
    {Object.keys([...Array(16)]).map((i) => (
      <Component
        key={i}
        className={clsx(className, 'flex-none')}
        imageClassName={imageClassName}
        title="タイトル"
        href="/books/1"
        cover="/default_cover.png"
      />
    ))}
  </div>
);
LineUpWithFlexboxOverWidth.storyName = 'FlexBoxで横幅の限界を超えて並べる';
LineUpWithFlexboxOverWidth.args = {
  imageClassName: clsx('h-48'),
};

export const LineUpWithGrid: Story<ComponentProps> = ({
  className,
  imageClassName,
}) => (
  <div className={clsx('grid', 'grid-cols-8', 'gap-4')}>
    {Object.keys([...Array(24)]).map((i) => (
      <Component
        key={i}
        className={className}
        imageClassName={imageClassName}
        title="タイトル"
        href="/books/1"
        cover="/default_cover.png"
      />
    ))}
  </div>
);
LineUpWithGrid.storyName = 'Gridで並べる';

export const LineUpWithGridWithTitle: Story<ComponentProps> = ({
  className,
  imageClassName,
}) => (
  <div className={clsx('grid', 'grid-cols-8', 'gap-4')}>
    {Object.keys([...Array(24)]).map((i) => (
      <Component
        key={i}
        className={className}
        imageClassName={imageClassName}
        title={`とある科学の超電磁砲(${Number(i) + 1})`}
        href="/books/1"
        cover="/default_cover.png"
        showTitle
      />
    ))}
  </div>
);
LineUpWithGridWithTitle.storyName = 'Gridで並べてタイトルを表示する';
