import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCardComponent } from './note-card.component';

describe('NoteComponent', () => {
  let component: NoteCardComponent;
  let fixture: ComponentFixture<NoteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
