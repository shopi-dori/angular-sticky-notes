import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NoteListViewComponent } from './views/note-list-view/note-list-view.component';
import { HelpViewComponent } from './views/help-view/help-view.component';
import { NoteAddViewComponent } from './views/note-add-view/note-add-view.component';
import { NoteEditViewComponent } from './views/note-edit-view/note-edit-view.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';

const ApplicationTitle = 'Stickysaurus Notes & Stuff';

const routes: Routes = [
  { title: `Home | ${ApplicationTitle}`, path: 'home', component: HomeViewComponent },
  {
    title: `Notes | ${ApplicationTitle}`,
    path: 'notes',
    component: NoteListViewComponent,
    children: [
      { path: 'add', component: NoteAddViewComponent },
      { path: 'edit', component: NoteEditViewComponent },
      { path: 'details', component: NoteDetailsComponent },
    ],
  },
  { title: `Help | ${ApplicationTitle}`, path: 'help', component: HelpViewComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
