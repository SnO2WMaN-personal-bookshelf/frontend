import clsx from 'clsx';
import React from 'react';
import {UserPageMenu} from '~/components/UserPageMenu';

export type ContainerProps = {
  className?: string;
  readTotal: number;
  readingTotal: number;
  wishTotal: number;
};
export const Container: React.FC<ContainerProps> = ({
  className,
  readTotal,
  readingTotal,
  wishTotal,
}) => (
  <section
    className={clsx(
      className,
      'max-w-screen-lg',
      'mx-auto',
      'flex',
      'items-center',
    )}
  >
    <UserPageMenu
      className={clsx('w-full')}
      readBooksTotal={readTotal}
      readingBooksTotal={readingTotal}
      wishBooksTotal={wishTotal}
    />
  </section>
);
