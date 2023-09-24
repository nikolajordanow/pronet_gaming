import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as noteActions from "./store/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly _store: Store) { }

  public ngOnInit(): void {
    // Should be placed in board.component or board resolver,
    // but as we use a fake data object it causes a reset everytime we visit the board page.
    this._store.dispatch(noteActions.LoadNotesRequest());
  }
}
