import clsx from 'clsx';
import React from 'react';

export const Layout: React.FC<{className?: string}> = ({
  className,
  children,
}) => (
  <main className={clsx(className, 'container', 'mx-auto')}>{children}</main>
);
