import includes from 'lodash/includes';
import React, { createContext, useContext } from 'react';

import {
  CheckboxGroupItemLabel,
  CheckboxGroupItemWrapper,
  CheckboxGroupWrapper,
} from './styles';

interface CheckboxGroupProps {
  type: 'checkbox' | 'radio';
  value: string | string[];
  onChange: (value: string) => void;
  children: React.ReactNode;
}

interface CheckboxGroupOptionProps {
  value: string;
  label: string;
  type?: 'checkbox' | 'radio';
  disabled?: boolean;
}

const Context = createContext({});

const CheckboxGroupInput = ({
  value,
  label,
  type,
  disabled,
}: CheckboxGroupOptionProps) => {
  const RadioContext = useContext(Context);
  const { state, onChange } = RadioContext;

  const isChecked =
    type === 'checkbox'
      ? includes(state.contextValue, value)
      : state.contextValue === value;

  return (
    <CheckboxGroupItemWrapper
      data-value={value}
      onClick={disabled ? null : onChange}
      checked={isChecked}
      disabled={disabled}
    >
      <CheckboxGroupItemLabel>{label || value}</CheckboxGroupItemLabel>
    </CheckboxGroupItemWrapper>
  );
};

const CheckboxGroup = ({
  type,
  value,
  onChange,
  children,
}: CheckboxGroupProps) => (
  <Context.Provider
    value={{
      state: {
        contextValue: value,
      },
      onChange: (event: React.FormEvent<HTMLElement>) =>
        onChange(event.currentTarget.getAttribute('data-value')),
    }}
  >
    <CheckboxGroupWrapper>
      {React.Children.map(children, (child: React.ReactElement<any>) =>
        React.cloneElement(child, {
          type,
        }),
      )}
    </CheckboxGroupWrapper>
  </Context.Provider>
);

CheckboxGroup.Option = CheckboxGroupInput;

export default CheckboxGroup;
