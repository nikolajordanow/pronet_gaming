import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from 'src/app/models/note';
import { ToasterService } from 'src/app/services/toaster.service';
import { NoteFormComponent } from '../note-form/note-form.component';
import { NotesSelector } from 'src/app/store/selectors/notes.selector';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as noteActions from 'src/app/store/actions';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private readonly _widthModal: string = '600px';
  private readonly _heightModal: string = '500px';

  public notes$: Observable<Note[]> = of([]);

  constructor(
    private readonly _notesSelector: NotesSelector,
    private readonly _store: Store,
    private readonly _dialog: MatDialog
  ) {
    this.notes$ = this._store.select(this._notesSelector.selectNotes);
  }

  public ngOnInit(): void {
    this._store.dispatch(noteActions.LoadNotesRequest());
  }

  public addNote(): void {
    const dialogRef = this._dialog.open(NoteFormComponent, {
      width: this._widthModal,
      height: this._heightModal,
      data: {
        author: '',
        content: '',
        date: new Date()
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
        date: new Date()
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

  public addToFavorites(note: Note): void {
    this._store.dispatch(noteActions.ChangeFavoritesRequest({ note }));
  }
}
