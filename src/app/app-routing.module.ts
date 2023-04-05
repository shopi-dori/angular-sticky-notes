import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NoteListViewComponent } from './views/note-list-view/note-list-view.component';
import { HelpViewComponent } from './views/help-view/help-view.component';
import { NoteAddViewComponent } from './views/note-add-view/note-add-view.component';
import { NoteEditViewComponent } from './views/note-edit-view/note-edit-view.component';
import { NoteDetailsViewComponent } from './views/note-details-view/note-details-view.component';

const ApplicationTitle = 'Stickysaurus Notes & Stuff';

const routes: Routes = [
  { title: `Home | ${ApplicationTitle}`, path: 'home', component: HomeViewComponent },
  {
    title: `Notes | ${ApplicationTitle}`,
    path: 'notes',
    component: NoteListViewComponent,
    // children: [
    //   { path: 'add/:id', component: NoteAddViewComponent },
    //   { path: 'edit/:id', component: NoteEditViewComponent },
    //   { path: 'details/:id', component: NoteDetailsViewComponent },
    // ],
  },
  { title: `Add Note | ${ApplicationTitle}`, path: 'notes/add', component: NoteAddViewComponent },
  { title: `Edit Note | ${ApplicationTitle}`, path: 'notes/edit/:id', component: NoteEditViewComponent },
  { title: `Note Details | ${ApplicationTitle}`, path: 'notes/details/:id', component: NoteDetailsViewComponent },
  { title: `Help | ${ApplicationTitle}`, path: 'help', component: HelpViewComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
