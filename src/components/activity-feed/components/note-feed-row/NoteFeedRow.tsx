import { FC } from 'react';
import { Note } from '../../../../models';
import {
  NoteFeedRowWrapper,
  MessageAndActionWrapper,
} from './NoteFeedRow.styles';
import { NoteMessage, NoteTimeline } from '..';
import { NoteFeedRowActions } from './note-feed-row-actions';

type NoteFeedRowProps = {
  [P in keyof Note]: Note[P];
};

export const NoteFeedRow: FC<NoteFeedRowProps> = ({
  id,
  noteType,
  date,
  message,
}) => {
  return (
    <NoteFeedRowWrapper>
      <NoteTimeline noteType={noteType} date={date} />
      <MessageAndActionWrapper>
        <NoteMessage message={message} noteType={noteType} />
        <NoteFeedRowActions noteId={id} />
      </MessageAndActionWrapper>
    </NoteFeedRowWrapper>
  );
};
