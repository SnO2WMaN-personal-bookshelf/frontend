import React from 'react';

import '../src/styles/tailwind.css';
import {ConfiguratedI18nextProvider} from '../src/i18n';

export const decorators = [
  (Story) => (
    <ConfiguratedI18nextProvider>
      <Story />
    </ConfiguratedI18nextProvider>
  ),
];

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
};
