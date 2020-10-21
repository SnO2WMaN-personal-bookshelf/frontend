import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Merge} from 'type-fest';

export type ComponentProps = Merge<
  Pick<ContainerProps, 'className' | 'total' | 'href'>,
  {
    i18n: ContainerProps['i18n'];
  }
>;
export const Component: React.FC<ComponentProps> = ({
  className,
  i18n,
  href,
  total,
}) => (
  <li
    className={clsx(
      className,
      'px-4',
      'py-2',
      'flex',
      'justify-center',
      'items-center',
    )}
  >
    <a href={href}>
      <span className={clsx()}>{i18n.title}</span>
      <span
        className={clsx(
          'inline-block',
          'ml-2',
          'px-2',
          'rounded-lg',
          'text-sm',
          'font-mono',
          'bg-blue-400',
          'text-gray-200',
        )}
      >
        {total}
      </span>
    </a>
  </li>
);

export type ContainerProps = {
  className?: string;
  total: number;
  href: string;
  i18n: {[key in 'title']: string};
};
export const Container: React.FC<ContainerProps> = (props) => {
  const {t} = useTranslation();

  return <Component {...props} />;
};
