import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable } from 'rxjs';


export enum GridBreakpoint {
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  showWallpaper: BehaviorSubject<boolean> = new BehaviorSubject(true);
  gridBreakpoint: BehaviorSubject<any> = new BehaviorSubject(GridBreakpoint.Medium);


  private breackpointObserver: BreakpointObserver = inject(BreakpointObserver);

  private destroyRef: DestroyRef = inject(DestroyRef);

  constructor() {

    this.breackpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
    ]).pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(state => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          this.gridBreakpoint.next(GridBreakpoint.XSmall)
        } else if (state.breakpoints[Breakpoints.Small]) {
          this.gridBreakpoint.next(GridBreakpoint.Small)
        }
        else if (state.breakpoints[Breakpoints.Medium]) {
          this.gridBreakpoint.next(GridBreakpoint.Medium)
        }
        else if (state.breakpoints[Breakpoints.Large]) {
          this.gridBreakpoint.next(GridBreakpoint.Large)
        }

      });

  }



  gridBreakpointValue(): Observable<GridBreakpoint> {
    return this.gridBreakpoint;
  }

}
