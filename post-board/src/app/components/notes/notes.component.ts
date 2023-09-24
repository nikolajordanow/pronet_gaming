import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Note } from 'src/app/models/note';
import * as noteActions from 'src/app/store/actions';
import { NoteFormComponent } from '../note-form/note-form.component';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  private readonly _widthModal: string = '600px';
  private readonly _heightModal: string = '500px';
  
  @Input()
  public notes: Note[] = [];

  @Input()
  public showAdd: boolean = false;

  constructor(
    private readonly _store: Store,
    private readonly _dialog: MatDialog
  ) {
  }

  public addNote(): void {
    const dialogRef = this._dialog.open(NoteFormComponent, {
      width: this._widthModal,
      height: this._heightModal,
      data: {
        author: '',
        content: '',
        date: new Date(),
        isFavorite: false
      }
    });

    dialogRef.afterClosed().subscribe(note => {
      if (!!note) {
        this._store.dispatch(noteActions.AddNoteRequest({ note }));
      }
    });
  }

  public editNote(note: Note): void {
    const dialogRef = this._dialog.open(NoteFormComponent, {
      width: this._widthModal,
      height: this._heightModal,
      data: {
        id: note.id,
        author: note.author,
        content: note.content,
        date: new Date(),
        isFavorite: note.isFavorite
      }
    });

    dialogRef.afterClosed().subscribe(note => {
      if (!!note) {
        this._store.dispatch(noteActions.UpdateNoteRequest({ note }));
      }
    });
  }

  public removeNote(note: Note): void {
    this._store.dispatch(noteActions.DeleteNoteRequest({ id: note.id }));
  }

  public toggleFavorites(note: Note): void {
    this._store.dispatch(noteActions.ToggleFavoritesStatusRequest({ note }));
  }
}
