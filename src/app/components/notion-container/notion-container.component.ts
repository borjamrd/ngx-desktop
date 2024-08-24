import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgComponentOutlet } from '@angular/common';
import { Component, ElementRef, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { maxZIndex } from 'app/shared/utils/utils';
import { DialogData } from '../window-container/window-container.component';
import { NotionComponent } from '../notion/notion.component';

@Component({
  selector: 'bm-notion-container',
  standalone: true,
  imports: [MatIconModule, DragDropModule, NgComponentOutlet, NotionComponent],
  templateUrl: './notion-container.component.html',
  styleUrl: './notion-container.component.scss'
})
export class NotionContainerComponent {


  private static maxZIndex = 1000;

  isFullScreen: boolean = false


  constructor(
    public dialogRef: MatDialogRef<NotionContainerComponent>,

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
      dialogElement.style.zIndex = `${NotionContainerComponent.maxZIndex++}`;
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
      this.dialogRef.updateSize('1000px', '600px');

    }



  }
  handleClose() {
    this.dialogRef.close();
  }



}
