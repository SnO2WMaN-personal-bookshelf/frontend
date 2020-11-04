import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, {useState} from 'react';

export type ComponentProps = {
  className?: string;
  i18n: {
    input: {placeholder: string; label: string};
    clearButton: {label: string};
  };
  input: string;
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
  clear(): void;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  i18n,
  input,
  clear,
  handleChange,
}) => (
  <form
    className={clsx(
      className,
      'px-4',
      'py-2',
      'bg-gray-200',
      'rounded-md',
      'flex',
    )}
  >
    <div className={clsx('px-2', 'flex', 'items-center', 'text-gray-500')}>
      <FontAwesomeIcon icon={faSearch} className={clsx('text-xl')} />
    </div>
    <input
      type="text"
      value={input}
      placeholder={i18n.input.placeholder}
      aria-label={i18n.input.label}
      onChange={handleChange}
      className={clsx(
        'py-1',
        'px-2',
        'flex-grow',
        'bg-transparent',
        'placeholder-gray-500',
        'text-lg',
        'focus:outline-none',
      )}
    />
    <button
      type="button"
      className={clsx(
        {invisible: !input.length},
        'px-2',
        'flex',
        'items-center',
        'text-gray-500',
        'hover:text-blue-500',
        'focus:outline-none',
      )}
      onClick={clear}
      aria-label={i18n.clearButton.label}
    >
      <FontAwesomeIcon icon={faTimes} className={clsx('text-xl')} />
    </button>
  </form>
);

export type ContainerProps = {
  className?: string;
};
export const Container: React.FC<ContainerProps> = (props) => {
  const [input, setInput] = useState('');

  return (
    <Component
      {...props}
      i18n={{
        input: {placeholder: '探したい本や作者を入力', label: '入力'},
        clearButton: {label: '消去'},
      }}
      input={input}
      handleChange={(event) => {
        setInput(event.target.value);
      }}
      clear={() => {
        setInput('');
      }}
    />
  );
};
