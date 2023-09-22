import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  @Input()
  public notes: Note[] = [];

  @Input()
  public showAdd: boolean = false;

  @Output()
  public onAddNote = new EventEmitter<Note>();

  @Output()
  public onEditNote = new EventEmitter<Note>();

  @Output()
  public onAddToFavorites = new EventEmitter<Note>();

  @Output()
  public onRemoveNote = new EventEmitter<Note>();

  public addNote(): void {
    this.onAddNote.emit();
  }

  public editNote(note: Note): void {
    if (note) {
      this.onEditNote.emit(note);
    }
  }

  public removeNote(note: Note): void {
    if (note) {
      this.onRemoveNote.emit(note);
    }
  }

  public addToFavorites(note: Note): void {
    if (note) {
      this.onAddToFavorites.emit(note);
    }
  }
}
