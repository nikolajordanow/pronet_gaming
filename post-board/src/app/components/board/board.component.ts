import { Component } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NotesSelector } from 'src/app/store/selectors/notes.selector';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  public notes$: Observable<Note[]> = of([]);

  constructor(
    private readonly _notesSelector: NotesSelector,
    private readonly _store: Store
  ) {
    this.notes$ = this._store.select(this._notesSelector.selectNotes);
  }
}
