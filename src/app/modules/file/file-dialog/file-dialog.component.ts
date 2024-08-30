import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, Inject, inject } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { maxZIndex } from "app/shared/utils/utils";
import { FileViewComponent } from "../file-view/file-view.component";

@Component({
  selector: 'bm-file-dialog',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    MatIconModule,
    FileViewComponent
  ],
  templateUrl: './file-dialog.component.html',
  styleUrl: './file-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(click)': 'updateZIndex()'
  }
})
export class FileDialogComponent {

  private static maxZIndex = 1000;

  private destroyRef = inject(DestroyRef);
  isFullScreen: boolean = false


  constructor(
    public dialogRef: MatDialogRef<FileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private _elementRef: ElementRef) {
    this.dialogRef.afterOpened()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.updateZIndex();
      });

  }

  handleHide(): void {
    this.dialogRef.close();
  }

  private updateZIndex(): void {
    const dialogElement = this._elementRef.nativeElement.closest('.cdk-global-overlay-wrapper');
    if (dialogElement) {
      dialogElement.style.zIndex = `${FileDialogComponent.maxZIndex++}`;
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
      this.dialogRef.updateSize('800px', '600px');

    }



  }
  handleClose() {
    this.dialogRef.close();
  }



}
