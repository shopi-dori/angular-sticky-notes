import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEditViewComponent } from './note-edit-view.component';

describe('NoteEditViewComponent', () => {
  let component: NoteEditViewComponent;
  let fixture: ComponentFixture<NoteEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteEditViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
