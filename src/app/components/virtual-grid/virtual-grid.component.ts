import { coerceNumberProperty } from '@angular/cdk/coercion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule, DOCUMENT, NgClass, NgComponentOutlet } from '@angular/common';
import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSelectChange } from '@angular/material/select';
import {
  KtdDragEnd,
  KtdDragStart,
  KtdGridComponent,
  KtdGridModule,
  KtdResizeEnd,
  KtdResizeStart,
  ktdTrackById
} from '@katoid/angular-grid-layout';
import { LayoutService } from 'app/shared/services/layout.service';
import { SystemElement } from 'app/shared/types/system-element.type';
import { transitions } from 'app/shared/utils/transitions';
import { ktdArrayRemoveElement } from 'app/shared/utils/utils';
import { debounceTime, filter, fromEvent, merge, Subscription } from 'rxjs';
import { CellContainerComponent } from './cell-container/cell-container.component';
import { DesktopWidgetComponent } from '../desktop-widget/desktop-widget.component';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'bm-virtual-grid',
  standalone: true,
  imports: [CellContainerComponent, DragDropModule, NgClass, KtdGridModule],
  templateUrl: './virtual-grid.component.html',
  styleUrl: './virtual-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualGridComponent implements OnInit, AfterContentChecked, OnDestroy {


  @Input() layout: SystemElement[] = []
  @ViewChild(KtdGridComponent, { static: true }) grid!: KtdGridComponent;
  @ViewChild('gridContainer', { static: true }) gridContainer!: ElementRef;

  trackById = ktdTrackById;

  BREAK_POINT_X_SMALL_COLS = 3;
  BREAK_POINT_SMALL_COLS = 6;
  BREAK_POINT_MEDIUM_COLS = 12;
  BREACK_POINT_LARGE_COLS = 16;
  BREACK_POINT_EXTRA_LARGE_COLS = 16;

  BREAK_POINT_X_SMALL_ROW_HEIGHT = 120;
  BREAK_POINT_SMALL_ROW_HEIGHT = 100;
  BREAK_POINT_MEDIUM_ROW_HEIGHT = 120;
  BREAK_POINT_LARGE_ROW_HEIGHT = 100;

  cols = this.BREAK_POINT_MEDIUM_COLS;
  rowHeight = this.BREAK_POINT_MEDIUM_ROW_HEIGHT;
  compactType: 'vertical' | 'horizontal' | null = null;

  currentTransition: string = transitions[0].value;

  dragStartThreshold = 0;
  autoScroll = true;
  disableDrag = false;
  disableResize = false;
  disableRemove = false;
  autoResize = true;
  preventCollision = false;
  isDragging = false;
  isResizing = false;
  resizeSubscription!: Subscription;



  containerWidth: number = 0;
  containerHeight: number = 0;

  public elementRef: ElementRef = inject(ElementRef);
  public document: Document = inject(DOCUMENT);
  layoutService = inject(LayoutService)
  private destroyRef: DestroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    fromEvent(window, 'resize')
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(100)
      )
      .subscribe(() => this.setColumnsAndRowHeight());
  }

  ngOnInit() {

    console.log(this.layout)
    this.resizeSubscription = merge(
      fromEvent(window, 'resize'),
      fromEvent(window, 'orientationchange'),
    )
      .pipe(
        debounceTime(50),
        filter(() => this.autoResize),
      )
      .subscribe(() => {
        this.grid.resize();
      });


  }

  ngAfterContentChecked(): void {
    this.containerWidth = this.gridContainer.nativeElement.clientWidth;
    this.containerHeight = this.gridContainer.nativeElement.clientHeight;
    this.setColumnsAndRowHeight()
  }

  ngOnDestroy() {
    this.resizeSubscription.unsubscribe();
  }

  onDragStarted(event: KtdDragStart) {
    this.isDragging = true;
  }

  onResizeStarted(event: KtdResizeStart) {
    this.isResizing = true;
  }

  onDragEnded(event: KtdDragEnd) {
    this.isDragging = false;
  }

  onResizeEnded(event: KtdResizeEnd) {
    this.isResizing = false;
  }

  onCompactTypeChange(change: MatSelectChange) {
    console.log('onCompactTypeChange', change);
    this.compactType = change.value;
  }

  onTransitionChange(change: MatSelectChange) {
    console.log('onTransitionChange', change);
    this.currentTransition = change.value;
  }

  onAutoScrollChange(checked: boolean) {
    this.autoScroll = checked;
  }

  onDisableDragChange(checked: boolean) {
    this.disableDrag = checked;
  }

  onDisableResizeChange(checked: boolean) {
    this.disableResize = checked;
  }

  onDisableRemoveChange(checked: boolean) {
    this.disableRemove = checked;
  }

  onAutoResizeChange(checked: boolean) {
    this.autoResize = checked;
  }

  onPreventCollisionChange(checked: boolean) {
    this.preventCollision = checked;
  }

  onColsChange(event: Event) {
    this.cols = coerceNumberProperty((event.target as HTMLInputElement).value);
  }

  onRowHeightChange(event: Event) {
    this.rowHeight = coerceNumberProperty(
      (event.target as HTMLInputElement).value,
    );
  }

  onDragStartThresholdChange(event: Event) {
    this.dragStartThreshold = coerceNumberProperty(
      (event.target as HTMLInputElement).value,
    );
  }
  /** Adds a grid element to the layout */
  addElementToLayout() {
    const maxId = this.layout.reduce(
      (acc, cur) => Math.max(acc, parseInt(cur.id, 10)),
      -1,
    );
    const nextId = maxId + 1;
  }

  /** Removes the element from the layout */
  removeElement(id: string) {
    // Important: Don't mutate the array. Let Angular know that the layout has changed creating a new reference.
    this.layout = ktdArrayRemoveElement(this.layout, (element) => element.id === id);
  }

  setColumnsAndRowHeight() {

    if (this.containerWidth < 600) {
      this.cols = this.BREAK_POINT_X_SMALL_COLS;
    }
    else if (this.containerWidth < 960) {
      this.cols = this.BREAK_POINT_SMALL_COLS;
    }
    else if (this.containerWidth < 1280) {
      this.cols = this.BREAK_POINT_MEDIUM_COLS;
    }
    else if (this.containerWidth < 1920) {
      this.cols = this.BREACK_POINT_LARGE_COLS;
    } else {
      this.cols = this.BREACK_POINT_EXTRA_LARGE_COLS;
    }
    const sizeItem = this.containerWidth / this.cols;
    this.rowHeight = Math.floor(sizeItem);
    this.cdr.detectChanges()


  }

  onRightClickGridContainer(event: MouseEvent): void {
    // event.preventDefault();
    // alert('alert');
  }


  // get wallPaperClass(): string {

  //   if (
  //     this.gridBreakpoint === GridBreakpoint.XSmall) {
  //     return 'wallpaper-mobile';
  //   }
  //   if (!this.showWallpaper) {
  //     return '';
  //   }
  //   return 'wallpaper-desktop';
  // }

}
