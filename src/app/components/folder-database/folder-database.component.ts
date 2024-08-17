import { Component, Input } from '@angular/core';
import { SystemElement } from 'app/shared/types/system-element.type';
import { CellContainerComponent } from '../virtual-grid/cell-container/cell-container.component';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'bm-folder-database',
  standalone: true,
  imports: [CellContainerComponent, NgFor],
  templateUrl: './folder-database.component.html',
  styleUrl: './folder-database.component.scss'
})
export class FolderDatabaseComponent {
  @Input() layout: SystemElement[] = []
}
