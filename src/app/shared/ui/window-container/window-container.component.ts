import { DragDropModule } from '@angular/cdk/drag-drop';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, HostListener, inject, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { CellContainerComponent } from '../virtual-grid/cell-container/cell-container.component';
import { MatIconModule } from '@angular/material/icon';
import { SystemElement } from 'app/shared/types/system-element.type';
import { FileExplorerService } from 'app/shared/services/file-explorer.service';


//TODO type
export interface DialogData {
  id: SystemElement['id'];
  icon: string;
  name: string;
  component: any;
  inputs: any
}


@Component({
  selector: 'bm-window-container',
  standalone: true,
  imports: [MatDialogModule, CellContainerComponent, AsyncPipe, CommonModule, DragDropModule, MatIconModule],
  templateUrl: './window-container.component.html',
  styleUrl: './window-container.component.scss'
})


export class WindowContainerComponent {


  fileExplorerService: FileExplorerService = inject(FileExplorerService);
  constructor(
    public dialogRef: MatDialogRef<WindowContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    this.dialogRef.afterClosed().subscribe(result => {
      this.fileExplorerService.closeFolder(this.data.id)
    });
  }

  onNoClick(): void {

    this.dialogRef.close();

  }



}
