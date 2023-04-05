import { Component } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'asn-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent {
  protected notes: Note[];

  constructor(notesService: NotesService) {
    this.notes = notesService.getNotes();
  }
}
