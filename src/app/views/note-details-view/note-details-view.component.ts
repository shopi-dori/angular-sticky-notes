import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'asn-note-details-view',
  templateUrl: './note-details-view.component.html',
  styleUrls: ['./note-details-view.component.scss']
})
export class NoteDetailsViewComponent implements OnInit, OnDestroy {
  protected note: Note | undefined;

  private routeSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private notesService: NotesService) {
  }

  public ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      const noteId = Number(params['id']);
      this.note = this.notesService.getNote(noteId);
    });
  }

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
