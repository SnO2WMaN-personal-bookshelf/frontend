import clsx from 'clsx';
import React from 'react';

export const Tr: React.FC<{title: string; detail: string}> = ({
  title,
  detail,
}) => (
  <tr>
    <td className={clsx('border', 'border-gray-400', 'py-1', 'px-4')}>
      <span className={clsx('text-sm', 'leading-tight')}>{title}</span>
    </td>
    <td className={clsx('border', 'border-gray-400', 'py-1', 'px-4')}>
      <span className={clsx('text-sm', 'leading-tight', 'select-all')}>
        {detail}
      </span>
    </td>
  </tr>
);

export type ComponentProps = {className?: string; isbn: string};
export const Component: React.FC<ComponentProps> = ({className, isbn}) => (
  <table className={clsx(className)}>
    <tbody>{isbn && <Tr title="ISBN" detail={isbn} />}</tbody>
  </table>
);

export type ContainerProps = ComponentProps;
export const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
