import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FocusDialogDirective } from 'app/shared/directives/focus-dialog.directive';
import { NotionComponent } from '../notion-view/notion.component';
@Component({
  selector: 'bm-notion-container',
  standalone: true,
  imports: [
    NotionComponent,
    NgComponentOutlet,
    DragDropModule,
    MatIconModule,
    FocusDialogDirective
  ],
  templateUrl: './notion-container.component.html',
  styleUrl: './notion-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotionContainerComponent {

  public dialogRef: MatDialogRef<NotionContainerComponent> = inject(MatDialogRef);
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
      this.dialogRef.updateSize('1000px', '600px');

    }



  }
  handleClose() {
    this.dialogRef.close();
  }



}
