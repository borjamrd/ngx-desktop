import { Component, ViewChild } from '@angular/core';
import { CellContainerComponent } from './cell-container/cell-container.component';
import { CdkDrag, CdkDragDrop, CdkDragMove, CdkDropList, CdkDropListGroup, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgClass } from '@angular/common';
import { ViewportRuler } from '@angular/cdk/scrolling';
@Component({
  selector: 'bm-virtual-grid',
  standalone: true,
  imports: [CellContainerComponent, DragDropModule, NgClass],
  templateUrl: './virtual-grid.component.html',
  styleUrl: './virtual-grid.component.scss'
})
export class VirtualGridComponent {

  public items: Array<number> = new Array(81).fill(0).map((_, i) => i);

  drop(event: CdkDragDrop<number[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

}