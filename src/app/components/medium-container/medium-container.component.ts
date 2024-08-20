import { Component, ElementRef, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { maxZIndex } from 'app/shared/utils/utils';
import { DialogData } from '../window-container/window-container.component';
import { MatIconModule } from '@angular/material/icon';
import { NgComponentOutlet } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MediumComponent } from '../medium/medium.component';
@Component({
  selector: 'bm-medium-container',
  standalone: true,
  imports: [MatIconModule, DragDropModule, NgComponentOutlet, MediumComponent],
  templateUrl: './medium-container.component.html',
  styleUrl: './medium-container.component.scss'
})
export class MediumContainerComponent {


  private static maxZIndex = 1000;

  isFullScreen: boolean = false


  constructor(
    public dialogRef: MatDialogRef<MediumContainerComponent>,

    //TODO! data must be implemented here
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
      dialogElement.style.zIndex = `${MediumContainerComponent.maxZIndex++}`;
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
  }



}
