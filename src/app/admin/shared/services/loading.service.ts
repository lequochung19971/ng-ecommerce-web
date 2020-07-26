import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  protected loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  close(): void {
    this.loading$.next(false);
  }

  open(): void {
    this.loading$.next(true);
  }

  isLoaded() {
    return this.loading$;
  }
}
