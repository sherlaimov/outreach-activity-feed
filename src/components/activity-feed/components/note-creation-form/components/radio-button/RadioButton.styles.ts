import styled from 'styled-components';
import { colors } from '../../../../../../constants';

export const RadioButtonWrapper = styled('label')`
  position: relative;
  width: fit-content;
  display: flex;
  cursor: pointer;
`;

export const RadioInput = styled('input')<{ error?: boolean }>`
  opacity: 0;
  position: absolute;
  left: 0px;
  top: 0px;
  margin: 0;
  display: inline;

  &:checked {
    & + span {
      background-color: ${colors.secondary.main};
    }
  }

  &:focus {
    & + span {
      border-color: ${colors.secondary.main};
    }
  }
`;

export const StyledRadio = styled.span<{ checked: boolean }>`
  position: relative;
  display: flex;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${({ checked }) =>
    checked ? colors.secondary.main : colors.grey.main};
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
  background: ${colors.white.main};
  cursor: pointer;

  & > svg {
    color: ${({ checked }) => (checked ? colors.white.main : colors.grey.main)};
  }

  &:hover {
    border-color: ${colors.secondary.main};
    background-color: ${colors.secondary.main};

    & svg {
      color: ${colors.white.main};
    }
  }
`;
