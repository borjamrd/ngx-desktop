import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgClass, NgFor } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SystemElement } from 'app/shared/types/system-element.type';
import { CellContainerComponent } from '../../../shared/components/cell-container/cell-container.component';

@Component({
  selector: 'bm-folder-database',
  standalone: true,
  imports: [CellContainerComponent, NgFor, DragDropModule, NgClass],

  templateUrl: './folder-database.component.html',
  styleUrl: './folder-database.component.scss',
  host: {
    class: 'block px-2'
  }
})
export class FolderDatabaseComponent {

  @Input() layout: SystemElement[] = []

  @ViewChild('elementList') elementList!: ElementRef;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.layout, event.previousIndex, event.currentIndex);
  }



}
