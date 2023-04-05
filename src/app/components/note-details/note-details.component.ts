import { Component, Input } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'asn-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent {
  @Input() note!: Note;

  constructor(private notesService: NotesService) {

  }

  protected onDelete(event: Event): void {
    event.preventDefault();

    this.notesService.deleteNote(this.note.id);
  }
}
