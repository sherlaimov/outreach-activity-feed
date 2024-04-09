import { FC } from 'react';
import { NoteType } from '../../../../models';
import { NoteActionMap } from './NoteMessage.constants';
import {
  Message,
  NoteTypeTitle,
  NoteMessageWrapper,
} from './NoteMessage.styles';

interface NoteProps {
  noteType: NoteType;
  message: string;
}

export const NoteMessage: FC<NoteProps> = ({ noteType, message }) => {
  const titleAction = NoteActionMap[noteType];

  return (
    <NoteMessageWrapper data-testid="message">
      <NoteTypeTitle>
        <span>You </span> {titleAction} <span>yourself</span>
      </NoteTypeTitle>
      <Message>{message}</Message>
    </NoteMessageWrapper>
  );
};
