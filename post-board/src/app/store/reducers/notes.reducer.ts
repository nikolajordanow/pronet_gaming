import { createReducer, on } from "@ngrx/store";
import { NotesState } from "../state";
import * as notesActions from '../actions';

export const _initialState: NotesState = {
  notes: []
};

export const notesReducer = createReducer(
  _initialState,
  on(notesActions.LoadNotesSuccess, (state, { notes }) => {
    return {
      notes
    }
  }),
  on(notesActions.LoadNotesError, () => ({
    notes: []
  })),
  on(notesActions.AddNoteSuccess, (state, { note }) => ({
    notes: [
      ...state.notes,
      note
    ]
  })),
  on(notesActions.UpdateNoteSuccess, (state, { note }) => ({
    notes: [
      ...state.notes.filter(n => n.id !== note.id),
      note
    ]
  })),
  on(notesActions.ChangeFavoritesSuccess, (state, { note }) => ({
    notes: [
      ...state.notes.map(n => {
        if (n.id === note.id) {
          return {
            ...n,
            isFavorite: !n.isFavorite
          }
        }
        return n;
      })
    ]
  })),
  on(notesActions.DeleteNoteSuccess, (state, { id }) => ({
    notes: [
      ...state.notes.filter(n => n.id !== id)
    ]
  }))
);
