import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'asn-note-add-view',
  templateUrl: './note-add-view.component.html',
  styleUrls: ['./note-add-view.component.scss']
})
export class NoteAddViewComponent {
  constructor(private notesService: NotesService, private router: Router) {

  }

  protected onSave(note: Note): void {
    this.notesService.addNote(note);

    this.router.navigate(['/notes']);
  }
}
