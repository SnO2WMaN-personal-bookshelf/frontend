---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---
import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component as PageLayout} from '~/components/Layout/PageLayout';
import {Component, ComponentProps} from '.';

export default {
  title: 'Page/<%= component_name %>',
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
