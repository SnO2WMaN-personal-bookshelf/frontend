import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Merge} from 'type-fest';

export type ComponentProps = Merge<
  Pick<Props, 'className' | 'total'>,
  {
    i18n: Props['i18n'];
  }
>;
export const Component: React.FC<ComponentProps> = ({
  className,
  i18n,
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
  </li>
);

export type Props = {
  className?: string;
  total: number;
  i18n: {[key in 'title']: string};
};
export const UserPageMenuColumn: React.FC<Props> = (props) => {
  const {t} = useTranslation();

  return <Component {...props} />;
};
