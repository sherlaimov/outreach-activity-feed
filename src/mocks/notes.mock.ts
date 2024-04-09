import { Note, NoteType } from '../models';
import { v4 as uuidv4 } from 'uuid';

export const notesMock: Note[] = [
  {
    id: uuidv4(),
    date: new Date(),
    noteType: NoteType.BEER,
    message: 'That tap beer is mindblowing.',
  },
  {
    id: uuidv4(),
    date: new Date(),
    noteType: NoteType.COFFEE,
    message: 'Banana milk cappuccino was delicious.',
  },
  {
    id: uuidv4(),
    date: new Date(),
    noteType: NoteType.MEETING,
    message: 'The meeting was a blast',
  },
  {
    id: uuidv4(),
    date: new Date(),
    noteType: NoteType.MESSAGE,
    message: 'This follow-up message is spot on.',
  },
  {
    id: uuidv4(),
    date: new Date(),
    noteType: NoteType.PHONE,
    message: 'Cold calls are an exercise in futility.',
  },
];
