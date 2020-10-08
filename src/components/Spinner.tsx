import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export interface ContainerProps {
  className?: string;
}

export const Spinner: React.FC<ContainerProps> = ({className}) => {
  return (
    <div className={clsx(className)}>
      <FontAwesomeIcon icon={faCircleNotch} spin />
    </div>
  );
};
