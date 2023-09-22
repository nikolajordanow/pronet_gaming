import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnDestroy {
  private readonly _subscription: Subscription;
  private readonly _toasterTimeInMilliseconds: number = 2000;

  public message: string | null = null;

  constructor(
    private readonly _toasterService: ToasterService
  ) {
    this._subscription = this._toasterService.toaster$.subscribe((message) => {
      this.message = message;
      setTimeout(() => {
        this.message = null;
      }, this._toasterTimeInMilliseconds);
    });
  }

  public ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
