import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteDetailsViewComponent } from './views/note-details-view/note-details-view.component';
import { NoteEditViewComponent } from './views/note-edit-view/note-edit-view.component';
import { NoteAddViewComponent } from './views/note-add-view/note-add-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { HelpViewComponent } from './views/help-view/help-view.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { NoteListViewComponent } from './views/note-list-view/note-list-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NoteListViewComponent,
    NoteDetailsViewComponent,
    NoteEditViewComponent,
    NoteAddViewComponent,
    HomeViewComponent,
    HelpViewComponent,
    NoteListComponent,
    NoteDetailsComponent,
    NoteFormComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
