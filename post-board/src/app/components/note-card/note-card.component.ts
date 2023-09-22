import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
  @Input()
  public note: Note = {
    id: '',
    author: '',
    content: 'Add new note',
    date: new Date(),
    isFavorite: false
  };

  @Output()
  public onEdit = new EventEmitter<Note>();

  @Output()
  public onAddToFavorites = new EventEmitter<Note>();

  @Output()
  public onRemove = new EventEmitter<Note>();

  public edit(): void {
    if (this.note) {
      this.onEdit.emit(this.note);
    }
  }

  public remove(): void {
    if (this.note) {
      this.onRemove.emit(this.note);
    }
  }

  public addToFavorites(): void {
    if (this.note) {
      this.onAddToFavorites.emit(this.note);
    }
  }
}
