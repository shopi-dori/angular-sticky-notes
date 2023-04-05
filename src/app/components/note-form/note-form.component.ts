import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteColor } from 'src/app/models/note-color';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'asn-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  @Input() note: Note | undefined;

  protected title: string = '';
  protected description: string = '';
  protected colorId: string = '';

  protected noteColors!: NoteColor[];

  constructor(private notesService: NotesService, private router: Router) {

  }

  public ngOnInit(): void {
    this.noteColors = this.notesService.getNoteColors();

    this.colorId = this.noteColors[0].id;
  }

  protected getNewNote(): Note {
    const note: Note = {
      id: this.note?.id || 0,
      colorId: this.colorId,
      title: this.title,
      description: this.description,
    };

    return note;
  }

  protected onSave(): void {
    const note: Note = this.getNewNote();

    this.notesService.addNote(note);

    this.router.navigate(['/notes']);
  }

  protected onLorem(): void {
    this.colorId = 'success';
    this.title = 'RAWR!';
    this.description = 'I am a fearsome sticky dinosaur!';
  }
}
