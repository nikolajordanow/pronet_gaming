import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private readonly _toasterSubject = new Subject<string>();
  public toaster$ = this._toasterSubject.asObservable();

  public showToast(message: string): void {
    this._toasterSubject.next(message);
  }
}