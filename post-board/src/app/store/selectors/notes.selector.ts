import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NotesState } from "../state";
import { POST_BOARD_FEATURE_NAME } from "../feature-name";

export class NotesSelector {
  private _getState = createFeatureSelector<NotesState>(POST_BOARD_FEATURE_NAME);

  public selectNotes = createSelector(this._getState, state => state.notes);

  public selectFavorites = createSelector(this._getState, state => state.notes.filter(note => note.isFavorite));
}
