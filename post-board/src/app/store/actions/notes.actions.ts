import { createAction, props } from "@ngrx/store";
import { Note } from "src/app/models/note";

const actionName = (name: string) => `[NOTES] ${name}`;

export const LoadNotesRequest = createAction(actionName('Load Notes Request'));
export const LoadNotesSuccess = createAction(actionName('Load Notes Success'), props<{ notes: Note[] }>());
export const LoadNotesError = createAction(actionName('Load Notes Error'), props<{ error: any }>());

export const AddNoteRequest = createAction(actionName('Add Note Request'), props<{ note: Note }>());
export const AddNoteSuccess = createAction(actionName('Add Note Success'), props<{ note: Note }>());
export const AddNoteError = createAction(actionName('Add Note Error'), props<{ error: any }>());

export const UpdateNoteRequest = createAction(actionName('Update Note Request'), props<{ note: Note }>());
export const UpdateNoteSuccess = createAction(actionName('Update Note Success'), props<{ note: Note }>());
export const UpdateNoteError = createAction(actionName('Update Note Error'), props<{ error: any }>());

export const DeleteNoteRequest = createAction(actionName('Delete Note Request'), props<{ id: string }>());
export const DeleteNoteSuccess = createAction(actionName('Delete Note Success'), props<{ id: string }>());
export const DeleteNoteError = createAction(actionName('Delete Note Error'), props<{ error: any }>());

export const ToggleFavoritesStatusRequest = createAction(actionName('Toggle Favorites Status Request'), props<{ note: Note }>());
export const ToggleFavoritesStatusSuccess = createAction(actionName('Toggle Favorites Status Success'), props<{ note: Note }>());
export const ToggleFavoritesStatusError = createAction(actionName('Toggle Favorites Status Error'), props<{ error: any }>());
