import { type InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export interface RadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label?: string;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelHidden?: boolean;
  checked: boolean;
  icon: IconType;
}
