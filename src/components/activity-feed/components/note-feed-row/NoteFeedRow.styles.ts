import styled from 'styled-components';
import { colors } from '../../../../constants';

export const NoteFeedRowWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
`;

export const MessageAndActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 5px;
  min-width: 500px;
  width: 100%;
  padding: 10px;
  background-color: ${colors.grey.light};
  border-radius: 5px;
  margin-top: 1rem;
`;
