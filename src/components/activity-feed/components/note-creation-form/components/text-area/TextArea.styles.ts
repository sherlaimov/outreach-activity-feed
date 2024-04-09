import styled, { css } from 'styled-components';

import { type TextAreaProps } from './TextArea.interfaces';
import { colors } from '../../../../../../constants';

const TextAreaFocusedState = css`
  transition: height 100ms linear;
  height: 100px;
  border-color: ${colors.primary.main};
  border-width: 1.5px;
  outline: none;
`;

export const TextAreaBase = styled('textarea').withConfig({
  shouldForwardProp: (prop) => !['isFocused'].includes(prop),
})<TextAreaProps>`
  min-width: 500px;
  height: ${(p) => (p.value ? '100px' : '25px')};
  padding: 10px;
  border: 1.5 solid;
  border-color: ${colors.grey.main};
  border-radius: 4px;
  resize: none;
  font-weight: 400;
  font-size: 16px;
  transition: height 100ms linear;

  ${({ isFocused }) => isFocused && TextAreaFocusedState}
`;
