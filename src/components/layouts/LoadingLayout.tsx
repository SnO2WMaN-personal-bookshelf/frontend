import clsx from 'clsx';
import React from 'react';

export const LoadingLayout: React.FC = ({children}) => (
  <main className={clsx('container', 'mx-auto')}>
    <p>LOADING</p>
  </main>
);
