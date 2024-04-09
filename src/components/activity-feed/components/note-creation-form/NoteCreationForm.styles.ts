import styled, { css } from 'styled-components';
import { colors } from '../../../../constants';

export const NoteCreationFormWrapper = styled.div`
  display: flex;
  column-gap: 40px;
`;

export const NoteFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  background-color: ${colors.grey.light};
  border-radius: 5px;
`;

export const ActionBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const SubmitButtonDisabledState = css`
  cursor: auto;
  background-color: ${colors.primary.disabled};
  &:hover {
    background-color: ${colors.primary.disabled};
  }
`;

export const SubmitButton = styled.button<{ disabled: boolean }>`
  background-color: ${colors.primary.main};
  color: ${colors.white.main};
  min-height: 35px;
  min-width: 80px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary.dark};
  }

  ${({ disabled }) => disabled && SubmitButtonDisabledState}
`;

export const FauxTimelineSection = styled.div<{
  isLastSection?: boolean;
}>`
  display: flex;
  position: relative;
  min-height: 85px;
  border-right: 1px solid ${colors.grey.main};
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: -16px;
  background-color: ${colors.white.main};
  display: flex;
  border: 1px solid ${colors.grey.main};
  border-radius: 50%;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;
