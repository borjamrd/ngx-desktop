import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WindowContainerComponent } from '../../window-container/window-container.component';
import { from } from 'rxjs';
import { SystemElement } from 'app/shared/types/system-element.type';
import { MatIconModule } from '@angular/material/icon';
import { FileExplorerService } from 'app/shared/services/file-explorer.service';

@Component({
  selector: 'bm-cell-container',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './cell-container.component.html',
  styleUrl: './cell-container.component.scss',
})

export class CellContainerComponent {

  private lazzyLoadFolderDatabase$ = from(import('@ui/folder-database/folder-database.component').then(component => component.FolderDatabaseComponent));

  @Input() element!: SystemElement;
  dialog: MatDialog = inject(MatDialog);

  fileExplorer: FileExplorerService = inject(FileExplorerService);

  onRightClickGridItem(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    alert('alert child');
  }


  openFolder(element: SystemElement) {

    const dialogRef = this.dialog.open(WindowContainerComponent, {
      width: '650px',
      height: '450px',
      enterAnimationDuration: 150,
      exitAnimationDuration: 150,
      panelClass: 'window-container',
      hasBackdrop: false,
      data: {
        icon: element.icon,
        name: 'Folder', component: this.lazzyLoadFolderDatabase$, inputs: {
          layout: element.children
        }
      },

    });

    this.fileExplorer.setActiveFiles(element);
    dialogRef.afterClosed().subscribe(result => {
      this.fileExplorer.closeFile(element)
    });
  }
}
