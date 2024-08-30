import { ChangeDetectorRef, ElementRef, inject, Injectable, OnDestroy, Optional } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResizeObserverService implements OnDestroy {
  private onResizeSubject = new Subject<ResizeObserverEntry>();
  private resizeObserver!: ResizeObserver;
  public onResize: Observable<
    ResizeObserverEntry
  > = this.onResizeSubject.asObservable();

  constructor(
    private chgRef: ChangeDetectorRef,
    @Optional() private el: ElementRef,
  ) {
    if (this.el === null) {
      console.error(
        `ng-resize-observer: No provider for ElementRef. This error is most likely because you added the ng-resize-observer provider in a @NgModule. Only add ng-resize-observer on @Component()`
      );
      return;
    }


    this.observe();
  }

  ngOnDestroy() {
    this.unobserve();
    this.onResizeSubject.complete();
  }

  private observe() {
    this.resizeObserver = new ResizeObserver((entries) => {
      const entry = entries && entries[0];
      if (entry) {
        this.onResizeSubject.next(entry);
        this.chgRef.detectChanges();
      }
    });
    this.resizeObserver.observe(this.target);
  }

  private unobserve() {
    console.log('unobserve')
    this.resizeObserver.unobserve(this.target);
  }

  private get target() {
    return this.el.nativeElement;
  }
}