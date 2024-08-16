import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WindowContainerComponent } from '../../window-container/window-container.component';
import { from } from 'rxjs';

@Component({
  selector: 'bm-cell-container',
  standalone: true,
  imports: [],
  templateUrl: './cell-container.component.html',
  styleUrl: './cell-container.component.scss',
})

export class CellContainerComponent {

  private lazzyLoadVirtualGridComponent$ = from(import('@ui/virtual-grid/virtual-grid.component').then(component => component.VirtualGridComponent));

  @Input() item: any;
  dialog: MatDialog = inject(MatDialog);

  onRightClickGridItem(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    alert('alert child');
  }


  openFolder() {
    const dialogRef = this.dialog.open(WindowContainerComponent, {
      width: '650px',
      data: {
        name: 'Folder', component: this.lazzyLoadVirtualGridComponent$, inputs: {
          layout: [{
            id: '1',
            x: 0,
            y: 0,
            w: 1,
            h: 1,
          }]
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
