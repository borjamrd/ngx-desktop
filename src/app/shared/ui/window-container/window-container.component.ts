import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component, Inject, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'bm-window-container',
  standalone: true,
  imports: [MatDialogModule, DragDropModule],
  templateUrl: './window-container.component.html',
  styleUrl: './window-container.component.scss'
})

export class WindowContainerComponent {
  constructor(
    public dialogRef: MatDialogRef<WindowContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
