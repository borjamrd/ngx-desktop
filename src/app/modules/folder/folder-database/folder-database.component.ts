import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SystemElement } from 'app/shared/types/system-element.type';
import { CellContainerComponent } from '../../../shared/components/cell-container/cell-container.component';

@Component({
  selector: 'bm-folder-database',
  standalone: true,
  imports: [CellContainerComponent, NgFor, DragDropModule],
  templateUrl: './folder-database.component.html',
  styleUrl: './folder-database.component.scss'
})
export class FolderDatabaseComponent {
  @Input() layout: SystemElement[] = []
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.layout, event.previousIndex, event.currentIndex);
  }
}
