import clsx from 'clsx';
import React from 'react';
import {NavbarSearchBox} from '~/components/Navbar/NavbarSearchBox';

export type ComponentProps = {
  className?: string;
};
export const Component: React.FC<ComponentProps> = ({className}) => (
  <nav className={clsx(className, 'bg-blue-900', 'py-4')}>
    <div className={clsx('container', 'mx-auto', 'flex')}>
      <div className={clsx('flex-grow', 'invisible', 'lg:visible')}>
        <NavbarSearchBox className={clsx('w-full')} />
      </div>
    </div>
  </nav>
);

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
