import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Injectable()
export class BoardResolver implements Resolve<void> {
  constructor(private readonly _store: Store) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<void> {
    // Moved to the app.component
    // this._store.dispatch(noteActions.LoadNotesRequest());
  }
}