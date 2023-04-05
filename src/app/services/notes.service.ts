import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';
import { NoteColor } from '../models/note-color';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private readonly BlueNoteColor: NoteColor = { id: 'primary', name: 'Blue' };
  private readonly YellowNoteColor: NoteColor = { id: 'warning', name: 'Yellow' };

  private notes: Note[] = [];
  private noteColors: NoteColor[] = [];

  constructor() {
    this.initializeNotes();
    this.initializeNoteColors();
  }

  public getNotes(): Note[] {
    return this.notes;
  }

  public getNoteColors(): NoteColor[] {
    return this.noteColors;
  }

  public getNote(id: number): Note | undefined {
    const matchingNote = this.notes.find((candidateNote: Note) => {
      return candidateNote.id === id;
    });

    return matchingNote;
  }

  public addNote(note: Note): void {
    note.id = this.getNextId();

    this.notes.push(note);
  }

  public deleteNote(id: number): void {
    const noteIndex = this.notes.findIndex((note: Note) => { return note.id === id });

    if (noteIndex >= 0) {
      this.notes.splice(noteIndex, 1);
    }
  }

  private getNextId(): number {
    let lastId = 0;

    this.notes.forEach((note: Note) => {
      const candidateNoteId = note.id;

      if (candidateNoteId > lastId) {
        lastId = candidateNoteId
      }
    });

    const nextId = lastId + 1;

    return nextId;
  }

  private initializeNotes(): void {
    this.notes = [
      {
        id: 1,
        colorId: this.YellowNoteColor.id,
        title: 'Lorem Ipsum',
        description: 'Praesent sed tincidunt orci, in ornare ligula. Maecenas consequat justo eget odio aliquam condimentum sed sit amet lectus. Vivamus fringilla, arcu at vehicula egestas, ipsum massa ornare leo, nec varius nibh quam in justo. Vivamus ac semper sapien, vitae dictum enim.',

      },
      {
        id: 2,
        colorId: this.BlueNoteColor.id,
        title: 'Dolor Sit',
        description: 'Nunc ac mi justo. Sed eros lorem, accumsan ac finibus in, convallis eu libero.',
      },
    ];
  }

  private initializeNoteColors(): void {
    this.noteColors = [
      this.BlueNoteColor,
      { id: 'info', name: 'Teal' },
      { id: 'success', name: 'Green' },
      this.YellowNoteColor,
      { id: 'danger', name: 'Red' },
      { id: 'light', name: 'Light Gray' },
      { id: 'secondary', name: 'Medium Gray' },
      { id: 'dark', name: 'Dark Gray' },
    ];
  }
}
