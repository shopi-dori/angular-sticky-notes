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
    // TODO
  }

  public deleteNote(id: number): void {
    // TODO
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
      { id: 'success', name: 'Green' },
      { id: 'danger', name: 'Red' },
      this.YellowNoteColor,
      { id: 'secondary', name: 'Medium Gray' },
      { id: 'info', name: 'Teal' },
      { id: 'light', name: 'Light Gray' },
      { id: 'dark', name: 'Dark Gray' },
    ];
  }
}
