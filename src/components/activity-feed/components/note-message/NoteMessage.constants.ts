import { NoteType } from '../../../../models';

export const NoteActionMap = {
  [NoteType.MESSAGE]: 'added a note to',
  [NoteType.COFFEE]: 'had a coffee with',
  [NoteType.BEER]: 'had a beer with',
  [NoteType.PHONE]: 'had a call with',
  [NoteType.MEETING]: 'had a meeting with',
};
