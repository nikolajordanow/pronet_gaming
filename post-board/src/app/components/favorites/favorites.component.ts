import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Note } from 'src/app/models/note';
import { NotesSelector } from 'src/app/store/selectors/notes.selector';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  public favorites$: Observable<Note[]> = of([]);

  constructor(
    private readonly _store: Store,
    private readonly _notesSelector: NotesSelector
  ) {
    this.favorites$ = this._store.select(this._notesSelector.selectFavorites);
  }
}
