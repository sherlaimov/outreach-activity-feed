import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Note, NoteCreationDto } from '../models';
import storageService from '../services/storage.service';

type DataProviderContextValue = {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  notes: Note[];
  removeNoteById: (id: string) => Promise<void>;
  addNote: ({ noteType, message }: NoteCreationDto) => void;
};

export const DataProviderContext = createContext<DataProviderContextValue>(
  {} as DataProviderContextValue
);

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = useCallback(({ noteType, message }: NoteCreationDto) => {
    const newNote = {
      noteType,
      message,
      id: uuidv4(),
      date: new Date(),
    };
    setNotes((notes) => [newNote, ...notes]);
    storageService.addNote(newNote);
  }, []);

  const removeNoteById = useCallback(async (id: string) => {
    const newNotes = await storageService.removeNoteById(id);
    newNotes && setNotes(newNotes);
  }, []);

  useEffect(() => {
    (async () => {
      const newNotes = await storageService.getNotes();
      setNotes(newNotes);
    })();
  }, []);

  const state = useMemo(
    () => ({
      setNotes,
      notes,
      removeNoteById,
      addNote,
    }),
    [setNotes, notes, removeNoteById, addNote]
  );

  return (
    <DataProviderContext.Provider value={state}>
      {children}
    </DataProviderContext.Provider>
  );
};

export const useData = (): DataProviderContextValue => {
  const context = useContext(DataProviderContext);
  if (context === undefined) {
    throw new Error('useDataProvider must be used within DataProviderContext');
  }
  return context;
};
