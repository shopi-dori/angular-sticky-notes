import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output('save') saveEventEmitter = new EventEmitter<Note>();

  protected title: string = '';
  protected description: string = '';
  protected colorId: string = '';

  protected noteColors!: NoteColor[];

  constructor(private notesService: NotesService) {

  }

  public ngOnInit(): void {
    this.noteColors = this.notesService.getNoteColors();

    if (this.note) {
      this.colorId = this.note.colorId;
      this.title = this.note.title;
      this.description = this.note.description;
    } else {
      this.colorId = this.noteColors[0].id;
    }
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

    this.saveEventEmitter.emit(note);
  }

  protected onLorem(): void {
    this.colorId = 'success';
    this.title = 'RAWR!';
    this.description = 'I am a fearsome sticky dinosaur!';
  }
}
