import clsx from 'clsx';
import React from 'react';

export const Layout: React.FC = ({children}) => (
  <main className={clsx('container', 'mx-auto')}>{children}</main>
);
