import localforage from 'localforage';
import { Note } from '../models';

interface Storage {
  notes: Note[];
}

class StorageService {
  private store: LocalForage;
  constructor(store: LocalForage) {
    this.store = store;
  }

  clear() {
    return this.store.clear();
  }

  private getItem<T extends keyof Storage>(key: T) {
    const data = this.store.getItem<Storage[T]>(key);
    return data;
  }

  private removeItem<T extends keyof Storage>(key: T) {
    return this.store.removeItem(key);
  }

  private setItem<T extends keyof Storage>(key: T, value: Storage[T]) {
    return this.store.setItem(key, value);
  }

  async setNotes(notes: Note[]) {
    await this.setItem('notes', notes);
  }

  async getNotes() {
    const notes = await this.getItem('notes');
    return notes || [];
  }

  async addNote(note: Note) {
    const notes = await this.getItem('notes');
    const oldNotes = notes ?? [];
    this.setItem('notes', [note, ...oldNotes]);
  }

  async removeNoteById(noteId: string) {
    const notes = await this.getItem('notes');
    if (notes) {
      const newUserIds = notes.filter(({ id }) => noteId !== id);
      return this.setItem('notes', newUserIds);
    }
  }
}

export default new StorageService(localforage);
