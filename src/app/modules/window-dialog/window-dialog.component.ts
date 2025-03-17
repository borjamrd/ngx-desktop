import { DragDropModule } from '@angular/cdk/drag-drop';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FocusDialogDirective } from 'app/shared/directives/focus-dialog.directive';
import { FileExplorerService } from 'app/shared/services/file-explorer.service';
import { SystemElement } from 'app/shared/types/system-element.type';


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
    imports: [
        MatIconModule,
        DragDropModule,
        CommonModule,
        AsyncPipe,
        MatDialogModule,
        FocusDialogDirective
    ],
    templateUrl: './window-dialog.component.html',
    styleUrl: './window-dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class WindowDialogComponent {

  public dialogRef: MatDialogRef<WindowDialogComponent> = inject(MatDialogRef);
  private fileExplorerService = inject(FileExplorerService);
  public isFullScreen: boolean = false

  public data = inject(MAT_DIALOG_DATA);


  handleHide(): void {
    this.dialogRef.close();
    this.fileExplorerService.minimizeElement(this.data.id, this.data.type)
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
    this.fileExplorerService.closeElement(this.data.id, this.data.type)
    this.dialogRef.close();
  }



}
