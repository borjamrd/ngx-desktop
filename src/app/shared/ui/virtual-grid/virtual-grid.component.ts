import { coerceNumberProperty } from '@angular/cdk/coercion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DOCUMENT, NgClass } from '@angular/common';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import {
  Component,
  DestroyRef,
  ElementRef,
  inject,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import {
  KtdDragEnd,
  KtdDragStart,
  KtdGridComponent,
  KtdGridLayout,
  KtdGridLayoutItem,
  KtdGridModule,
  KtdResizeEnd,
  KtdResizeStart,
  ktdTrackById,
} from '@katoid/angular-grid-layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ktdArrayRemoveItem, transitions } from 'app/shared/utils/utils';
import { Subscription, debounceTime, filter, fromEvent, merge } from 'rxjs';
import { CellContainerComponent } from './cell-container/cell-container.component';
import { GridBreakpoint, LayoutService } from 'app/shared/services/layout.service';

@Component({
  selector: 'bm-virtual-grid',
  standalone: true,
  imports: [CellContainerComponent, DragDropModule, NgClass, KtdGridModule],
  templateUrl: './virtual-grid.component.html',
  styleUrl: './virtual-grid.component.scss',
})
export class VirtualGridComponent implements OnInit, OnDestroy {
  @ViewChild(KtdGridComponent, { static: true }) grid!: KtdGridComponent;
  trackById = ktdTrackById;

  BREAK_POINT_X_SMALL_COLS = 3;
  BREAK_POINT_SMALL_COLS = 6;
  BREAK_POINT_MEDIUM_COLS = 12;
  BREACK_POINT_LARGE_COLS = 16;

  BREAK_POINT_X_SMALL_ROW_HEIGHT = 120;
  BREAK_POINT_SMALL_ROW_HEIGHT = 100;
  BREAK_POINT_MEDIUM_ROW_HEIGHT = 120;
  BREAK_POINT_LARGE_ROW_HEIGHT = 100;

  cols = this.BREAK_POINT_MEDIUM_COLS;
  rowHeight = this.BREAK_POINT_MEDIUM_ROW_HEIGHT;
  compactType: 'vertical' | 'horizontal' | null = null;
  @Input() layout: KtdGridLayout = []

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

  constructor() {
    this.layoutService.gridBreakpointValue()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.setColumnsAndRowHeight(value);
      })
  }

  ngOnInit() {

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

  onLayoutUpdated(layout: KtdGridLayout) {
    console.log('on layout updated', layout);
    this.layout = layout;
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
  /** Adds a grid item to the layout */
  addItemToLayout() {
    const maxId = this.layout.reduce(
      (acc, cur) => Math.max(acc, parseInt(cur.id, 10)),
      -1,
    );
    const nextId = maxId + 1;

    const newLayoutItem: KtdGridLayoutItem = {
      id: nextId.toString(),
      x: 0,
      y: 0,
      w: 2,
      h: 2,
    };

    // Important: Don't mutate the array, create new instance. This way notifies the Grid component that the layout has changed.
    this.layout = [newLayoutItem, ...this.layout];
  }

  /** Removes the item from the layout */
  removeItem(id: string) {
    // Important: Don't mutate the array. Let Angular know that the layout has changed creating a new reference.
    this.layout = ktdArrayRemoveItem(this.layout, (item) => item.id === id);
  }

  setColumnsAndRowHeight(
    gridBreakpoint: GridBreakpoint,
  ) {
    if (gridBreakpoint === GridBreakpoint.XSmall) {
      this.cols = this.BREAK_POINT_X_SMALL_COLS
      this.rowHeight = this.BREAK_POINT_X_SMALL_ROW_HEIGHT;

    } else if (gridBreakpoint === GridBreakpoint.Small) {
      this.cols = this.BREAK_POINT_SMALL_COLS
      this.rowHeight = this.BREAK_POINT_SMALL_ROW_HEIGHT;
    } else if (gridBreakpoint === GridBreakpoint.Medium) {
      this.cols = this.BREAK_POINT_MEDIUM_COLS
      this.rowHeight = this.BREAK_POINT_MEDIUM_ROW_HEIGHT;
    }
    else {
      this.cols = this.BREACK_POINT_LARGE_COLS
      this.rowHeight = this.BREAK_POINT_LARGE_ROW_HEIGHT;
    }

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
