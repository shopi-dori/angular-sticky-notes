import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAddViewComponent } from './note-add-view.component';

describe('NoteAddViewComponent', () => {
  let component: NoteAddViewComponent;
  let fixture: ComponentFixture<NoteAddViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteAddViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
