import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'asn-note-edit-view',
  templateUrl: './note-edit-view.component.html',
  styleUrls: ['./note-edit-view.component.scss']
})
export class NoteEditViewComponent {
  protected note: Note | undefined;

  private routeSubscription!: Subscription;

  constructor(private notesService: NotesService, private route: ActivatedRoute, private router: Router) {

  }

  public ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      const noteId = Number(params['id']);
      const originalNote = this.notesService.getNote(noteId);

      if (originalNote) {
        const editableNote: Note = {
          ...originalNote!,
        };

        this.note = editableNote;
      }
    });
  }

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  protected onSave(note: Note): void {
    this.notesService.saveNote(note);

    this.router.navigate(['/notes']);
  }
}
