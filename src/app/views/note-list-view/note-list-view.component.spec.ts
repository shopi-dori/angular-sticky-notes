import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListViewComponent } from './note-list-view.component';

describe('NoteListViewComponent', () => {
  let component: NoteListViewComponent;
  let fixture: ComponentFixture<NoteListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
