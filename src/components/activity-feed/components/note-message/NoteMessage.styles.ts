import styled from 'styled-components';
import { colors } from '../../../../constants';

export const NoteMessageWrapper = styled.div`
  p {
    margin: 0;
  }
`;

export const Message = styled.p`
  color: ${colors.typography.light};
  font-size: 14px;
`;

export const NoteTypeTitle = styled.p`
  color: ${colors.typography.main};
  font-size: 18px;
  & span {
    font-weight: 600;
    color: ${colors.secondary.dark};
  }
`;
