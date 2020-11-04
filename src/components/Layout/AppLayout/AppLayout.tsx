import clsx from 'clsx';
import React from 'react';
import {PageLayout} from '~/components/Layout/PageLayout';
import {Navbar} from '~/components/Navbar';

export type ContainerProps = {
  className?: string;
};
export const Container: React.FC<ContainerProps> = ({children, className}) => {
  return (
    <div className={clsx(className, 'flex', 'flex-col', 'bg-gray-100')}>
      <Navbar className={clsx('w-full', 'sticky', 'top-0', 'left-0', 'z-50')} />
      <PageLayout className={clsx('w-full', 'h-full', 'my-8')}>
        {children}
      </PageLayout>
      <footer
        className={clsx('w-full', 'h-full', 'bg-blue-400', 'flex-grow')}
      />
    </div>
  );
};
