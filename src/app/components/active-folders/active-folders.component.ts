import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FolderElement } from 'app/shared/types/system-element.type';
import { from, Observable } from 'rxjs';
import { WindowContainerComponent } from '../window-container/window-container.component';
import { FileExplorerService } from 'app/shared/services/file-explorer.service';
import { slideInOut } from 'app/shared/utils/transitions';

@Component({
  selector: 'bm-active-folders',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './active-folders.component.html',
  styleUrl: './active-folders.component.scss',
  animations: [slideInOut]

})
export class ActiveFoldersComponent {
  private lazzyLoadFolderDatabase$ = from(import('@components/folder-database/folder-database.component').then(component => component.FolderDatabaseComponent));

  @Input() activeFolders!: FolderElement[]

  fileExplorerService: FileExplorerService = inject(FileExplorerService);
  dialog: MatDialog = inject(MatDialog);
  handleOpenFolder(folder: FolderElement): void {

    const element = this.fileExplorerService.systemFiles().find((element) => element.id === folder.id);

    if (!element) {
      throw new Error('Element not found')
    }
    this.dialog.open(WindowContainerComponent, {
      width: '650px',
      height: '450px',
      maxWidth: "100%",
      maxHeight: "100%",
      enterAnimationDuration: 150,
      exitAnimationDuration: 150,
      panelClass: 'window-container',
      hasBackdrop: false,
      data: {
        id: element.id,
        icon: element.icon,
        name: 'Folder', component: this.lazzyLoadFolderDatabase$, inputs: {
          layout: element.children
        }
      },

    });

    this.fileExplorerService.setActiveFolders(folder)
  }

}
