import i18n from 'i18next';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import React from 'react';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import ja from './ja';

const resources = {ja};

i18n.use(i18nextBrowserLanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'ja-JP',
  debug: false,
});

export const ConfiguratedI18nextProvider: React.FC = ({children}) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);
