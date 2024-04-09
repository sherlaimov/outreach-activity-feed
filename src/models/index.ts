export enum NoteType {
  MESSAGE = 'message',
  PHONE = 'phone',
  COFFEE = 'coffee',
  BEER = 'beer',
  MEETING = 'meeting',
}

export interface Note {
  id: string;
  date: Date;
  noteType: NoteType;
  message: string;
}

export type NoteCreationDto = Omit<Note, 'id' | 'date'>;
