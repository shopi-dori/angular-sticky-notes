import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetailsViewComponent } from './note-details-view.component';

describe('NoteDetailsViewComponent', () => {
  let component: NoteDetailsViewComponent;
  let fixture: ComponentFixture<NoteDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
