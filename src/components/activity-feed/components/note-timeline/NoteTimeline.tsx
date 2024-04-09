import ReactTimeAgo from 'react-time-ago';

import { IconWrapper, NoteTimelineWrapper } from './NoteTimeline.styles';
import { NoteType } from '../../../../models';
import { FC } from 'react';
import { NoteTypeIconMap } from './NoteTimeline.constants';
import { colors } from '../../../../constants';

interface TimelineProps {
  noteType: NoteType;
  date: Date;
}

export const NoteTimeline: FC<TimelineProps> = ({ noteType, date }) => {
  const Icon = NoteTypeIconMap[noteType];

  return (
    <NoteTimelineWrapper>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="twitter-minute" />
      <IconWrapper>
        <Icon color={colors.grey.main} />
      </IconWrapper>
    </NoteTimelineWrapper>
  );
};
