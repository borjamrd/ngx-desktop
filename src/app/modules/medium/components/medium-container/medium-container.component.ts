import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FocusDialogDirective } from 'app/shared/directives/focus-dialog.directive';
import { MediumComponent } from '../medium-view/medium.component';
@Component({
  selector: 'bm-medium-container',
  standalone: true,
  imports: [
    MediumComponent,
    NgComponentOutlet,
    DragDropModule,
    FocusDialogDirective,
    MatIconModule,
  ],
  templateUrl: './medium-container.component.html',
  styleUrl: './medium-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediumContainerComponent {



  public dialogRef: MatDialogRef<MediumContainerComponent> = inject(MatDialogRef);
  public data = inject(MAT_DIALOG_DATA);
  public isFullScreen: boolean = false


  handleHide(): void {
    this.dialogRef.close();
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
