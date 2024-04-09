import { type FC, useId } from 'react';
import { type RadioButtonProps } from './RadioButton.interfaces';
import {
  RadioButtonWrapper,
  RadioInput,
  StyledRadio,
} from './RadioButton.styles';

export const RadioButton: FC<RadioButtonProps> = ({
  name,
  value,
  checked,
  onChange,
  disabled,
  error,
  icon,
  ...inputProps
}) => {
  const id = useId();
  const Icon = icon;
  return (
    <RadioButtonWrapper>
      <RadioInput
        checked={checked}
        disabled={disabled}
        error={error}
        id={inputProps.id ?? id}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
        tabIndex={0}
        {...inputProps}
      />
      <StyledRadio checked={checked}>
        <Icon />
      </StyledRadio>
    </RadioButtonWrapper>
  );
};
