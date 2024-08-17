import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WindowContainerComponent } from '../../window-container/window-container.component';
import { from } from 'rxjs';
import { SystemElement } from 'app/shared/types/system-element.type';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'bm-cell-container',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './cell-container.component.html',
  styleUrl: './cell-container.component.scss',
})

export class CellContainerComponent {

  private lazzyLoadVirtualGridComponent$ = from(import('@ui/virtual-grid/virtual-grid.component').then(component => component.VirtualGridComponent));

  @Input() element!: SystemElement;
  dialog: MatDialog = inject(MatDialog);

  onRightClickGridItem(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    alert('alert child');
  }


  openFolder(element: SystemElement) {

    const dialogRef = this.dialog.open(WindowContainerComponent, {
      width: '650px',
      height: '450px',
      hasBackdrop: false,
      enterAnimationDuration: 150,
      exitAnimationDuration: 150,
      data: {
        name: 'Folder', component: this.lazzyLoadVirtualGridComponent$, inputs: {
          layout: element.children
        }
      },

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
