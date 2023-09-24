import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, map, catchError, of, switchMap } from "rxjs";
import { Note } from "../../models/note";
import * as notesActions from '../actions/notes.actions';
import * as toasterActions from '../actions/toaster.actions';
import { NoteService } from "src/app/services/notes.service";

@Injectable()
export class NotesEffects {

  constructor(
    private readonly _actions$: Actions,
    private readonly _noteService: NoteService
  ) { }

  public loadNotes$: Observable<Action> = createEffect(
    () => this._actions$.pipe(
      ofType(notesActions.LoadNotesRequest),
      switchMap(() => this._noteService.getAll().pipe(
        map((notes: Note[]) => notesActions.LoadNotesSuccess({ notes })),
        catchError(error => of(notesActions.LoadNotesError({ error })))
      ))
    )
  );

  public addNote$: Observable<Action> = createEffect(
    () => this._actions$.pipe(
      ofType(notesActions.AddNoteRequest),
      switchMap(({ note }) => this._noteService.add(note).pipe(
        map((note: Note) => notesActions.AddNoteSuccess({ note })),
        catchError(error => of(notesActions.AddNoteError({ error })))
      ))
    )
  );

  public updateNote$: Observable<Action> = createEffect(
    () => this._actions$.pipe(
      ofType(notesActions.UpdateNoteRequest),
      switchMap(({ note }) => this._noteService.update(note).pipe(
        map((note: Note) => notesActions.UpdateNoteSuccess({ note })),
        catchError(error => of(notesActions.UpdateNoteError({ error })))
      ))
    )
  );

  public deleteNote$: Observable<Action> = createEffect(
    () => this._actions$.pipe(
      ofType(notesActions.DeleteNoteRequest),
      switchMap(({ id }) => this._noteService.delete(id).pipe(
        map((id: string) => notesActions.DeleteNoteSuccess({ id })),
        catchError(error => of(notesActions.DeleteNoteError({ error })))
      ))
    )
  );

  public changeFavorites$: Observable<Action> = createEffect(
    () => this._actions$.pipe(
      ofType(notesActions.ToggleFavoritesStatusRequest),
      switchMap(({ note }) => this._noteService.addToFavorites(note).pipe(
        map(() => notesActions.ToggleFavoritesStatusSuccess({ note })),
        catchError(error => of(notesActions.ToggleFavoritesStatusError({ error })))
      ))
    )
  );

  public showSuccessToaster$: Observable<Action> = createEffect(
    () => this._actions$.pipe(
      ofType(
        notesActions.AddNoteSuccess,
        notesActions.UpdateNoteSuccess,
        notesActions.DeleteNoteSuccess
      ),
      map(action => toasterActions.DisplaySuccessToaster({ message: action.type }))
    )
  );

  public showErrorToaster$: Observable<Action> = createEffect(
    () => this._actions$.pipe(
      ofType(
        notesActions.LoadNotesError,
        notesActions.AddNoteError,
        notesActions.UpdateNoteError,
        notesActions.DeleteNoteError
      ),
      map(action => toasterActions.DisplaySuccessToaster({ message: action.type }))
    )
  );
}
