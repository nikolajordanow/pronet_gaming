import { ToasterService } from "src/app/services/toaster.service";
import * as toasterActions from '../actions/toaster.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, switchMap, tap } from "rxjs";

@Injectable()
export class ToasterEffects {

  constructor(
    private readonly _actions$: Actions,
    private readonly _toasterService: ToasterService
  ) { }

  public displayToaster$: Observable<Action> = createEffect(
    () => this._actions$.pipe(
      ofType(toasterActions.DisplaySuccessToaster),
      tap(({ message }) => this._toasterService.showToast(message)
      )
    ), { dispatch: false }
  );
}