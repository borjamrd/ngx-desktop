import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WindowContainerComponent } from '../../window-container/window-container.component';

@Component({
  selector: 'bm-cell-container',
  standalone: true,
  imports: [],
  templateUrl: './cell-container.component.html',
  styleUrl: './cell-container.component.scss',
})
export class CellContainerComponent {

  @Input() item: any;
  dialog: MatDialog = inject(MatDialog);

  onRightClickGridItem(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    alert('alert child');
  }


  openFolder() {
    const dialogRef = this.dialog.open(WindowContainerComponent, {
      width: '250px',
      data: { name: 'Folder' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
