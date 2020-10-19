import clsx from 'clsx';
import React from 'react';
import {Spinner} from '~/components/Spinner/Spinner';
import {Layout} from './DefaultLayout';

export const LoadingLayout: React.FC = ({children}) => (
  <Layout>
    <Spinner className={clsx('text-blue-400', 'text-4xl')} />
  </Layout>
);
