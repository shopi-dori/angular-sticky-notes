import { Component, Input } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'asn-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent {
  @Input() note!: Note;
}
