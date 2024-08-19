import { DragDropModule } from '@angular/cdk/drag-drop';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, Inject, ViewChild } from '@angular/core';
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
import { maxZIndex } from 'app/shared/utils/utils';


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

  private static maxZIndex = 1000;

  fileExplorerService: FileExplorerService = inject(FileExplorerService);
  isFullScreen: boolean = false


  constructor(
    public dialogRef: MatDialogRef<WindowContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

    private _elementRef: ElementRef) {
    this.dialogRef.afterOpened().subscribe(() => {
      this.updateZIndex();
    });

  }

  @HostListener('click')
  onClick(): void {
    this.updateZIndex();

  }
  handleHide(): void {
    this.dialogRef.close();
  }

  private updateZIndex(): void {
    const dialogElement = this._elementRef.nativeElement.closest('.cdk-global-overlay-wrapper');
    if (dialogElement) {
      dialogElement.style.zIndex = `${WindowContainerComponent.maxZIndex++}`;
    }
  }

  getMaxModalIndex(): number {
    return maxZIndex('.mdc-dialog');
  }
  onResizeButtonClicked() {

    this.isFullScreen = !this.isFullScreen;

    if (this.isFullScreen) {

      this.dialogRef.removePanelClass('not-fullscreen');
      this.dialogRef.addPanelClass('fullscreen');
      this.dialogRef.updatePosition({ top: '0px', left: '0px' });
      this.dialogRef.updateSize('100vw', '100vh');

    } else {

      this.dialogRef.removePanelClass('fullscreen');
      this.dialogRef.addPanelClass('not-fullscreen');
      this.dialogRef.updateSize('600px', '400px');

    }



  }
  handleClose() {
    this.dialogRef.close();
    this.fileExplorerService.closeFolder(this.data.id)
  }



}
