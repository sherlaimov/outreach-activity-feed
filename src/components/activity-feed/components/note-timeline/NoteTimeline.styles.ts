import styled from 'styled-components';
import { colors } from '../../../../constants';

export const NoteTimelineWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  border-left: 1px solid ${colors.grey.main};

  & > time {
    position: absolute;
    font-size: 0.8rem;
    align-self: center;
    left: -100px;
    max-width: 60px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white.main};
  border: 1px solid ${colors.grey.main};
  border-radius: 50%;
  height: 30px;
  width: 30px;
  transform: translateX(-50%);
  align-self: center;
`;
