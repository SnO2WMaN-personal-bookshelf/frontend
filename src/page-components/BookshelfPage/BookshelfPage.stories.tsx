import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component as PageLayout} from '~/components/Layout/PageLayout';
import {Component, ComponentProps} from '.';

export default {
  title: 'BookshelfPage',
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
Primary.args = {i18n: {heading: 'SnO2WMaNの読んだ本'}};
