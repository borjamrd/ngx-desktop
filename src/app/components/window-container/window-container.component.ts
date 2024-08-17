import { DragDropModule } from '@angular/cdk/drag-drop';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, Inject } from '@angular/core';
import {
  DialogPosition,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
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
  maximize: boolean = false
  lastPosition!: DialogPosition
  constructor(
    public dialogRef: MatDialogRef<WindowContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _elementRef: ElementRef) {

  }

  static readonly positionLocalStorageKey = "MyDialogComponentDialogPosition";

  handleHide(): void {
    this.dialogRef.close();
  }

  handleMinimize(): void {
    console.log(this.lastPosition)
    this.maximize = false
    this.dialogRef.updatePosition(this.lastPosition)
    this.dialogRef.updateSize('650px', '450px')

  }
  handleMaximize(): void {
    this.maximize = true
    let element: HTMLElement = this._elementRef.nativeElement;
    let dialog = element.parentElement;
    let dialogPosition = dialog?.getBoundingClientRect();

    this.lastPosition = {
      top: Math.floor(dialogPosition?.top || 20).toString() + 'px',
      left: Math.floor(dialogPosition?.left || 20).toString() + 'px',
      bottom: Math.floor(dialogPosition?.bottom || 20).toString() + 'px',
      right: Math.floor(dialogPosition?.right || 20).toString() + 'px',
    }
    this.dialogRef.updatePosition({ top: '0', left: '0' })
    this.dialogRef.updateSize('100%', '95%')
  }
  handleClose() {
    this.dialogRef.close();
    this.fileExplorerService.closeFolder(this.data.id)
  }



}
