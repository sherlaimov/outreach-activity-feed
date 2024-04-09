import { Content } from '@radix-ui/react-dropdown-menu';
import styled, { css } from 'styled-components';
import { colors } from '../../../../../constants';

export const DropdownContent = styled(Content)`
  min-width: 70px;
  padding: 10px 4px;
  background-color: ${colors.white.main};
  border: 1px solid ${colors.grey.light};
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const MenuTriggerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  height: 30px;
  min-width: 30px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 1px 5px ${colors.grey.main};
  &:hover {
    background-color: ${colors.secondary.main};
    & > svg {
      color: ${colors.white.main};
    }
  }
`;

const DeleteActionStyles = css`
  border: 1px solid ${colors.red.main};
  color: ${colors.white.main};
  background-color: ${colors.red.light};

  &:hover,
  &:focus {
    background-color: ${colors.red.main};
    color: ${colors.white.main};
  }
`;

export const ActionButton = styled.button`
  width: 100%;
  border: 1px solid transparent;
  cursor: pointer;
  background-color: ${colors.grey.light};
  min-height: 30px;
  outline: none;

  &:hover {
    background-color: ${colors.grey.main};
    color: ${colors.white.main};
  }

  ${DeleteActionStyles}
`;
