import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileDialogComponent } from '@modules/file/file-dialog/file-dialog.component';
import { MediumContainerComponent } from '@modules/medium/components/medium-container/medium-container.component';
import { NotionDialogComponent } from 'app/modules/notion/components/notion-dialog/notion-dialog.component';
import { WindowDialogComponent } from 'app/modules/window-dialog/window-dialog.component';
import { from } from 'rxjs';
import { SystemElement } from '../types/system-element.type';
import { FILE_DIALOG_CONFIG, FOLDER_DIALOG_CONFIG, MEDIUM_DIALOG_CONFIG, NOTION_DIALOG_CONFIG } from '../utils';
import { FileExplorerService } from './file-explorer.service';


export interface IDisplayElementWindowService {
  open: (element: SystemElement) => void;
}
@Injectable({
  providedIn: 'root'
})
export class DisplayElementWindowService implements IDisplayElementWindowService {


  dialog: MatDialog = inject(MatDialog);
  private lazzyLoadFolderDatabase$ = from(import('@modules/folder/folder-database/folder-database.component').then(component => component.FolderDatabaseComponent));
  fileExplorer: FileExplorerService = inject(FileExplorerService);
  public open(element: SystemElement): void {


    const data = {
      id: element.id,
      icon: element.icon,
      name: element.name,
      component: this.lazzyLoadFolderDatabase$,
      fileData: element?.fileData,
      inputs: {
        layout: element.children
      }
    }
    switch (element.type) {
      case 'folder':
        this.dialog.open(WindowDialogComponent, { ...FOLDER_DIALOG_CONFIG, data });
        break;
      case 'file':
        this.dialog.open(FileDialogComponent, { ...FILE_DIALOG_CONFIG, data, });
        break
      case 'application':
        switch (element.name.toLocaleLowerCase()) {
          case 'medium':
            this.dialog.open(MediumContainerComponent, { ...MEDIUM_DIALOG_CONFIG, data });
            break;
          case 'notion':
            this.dialog.open(NotionDialogComponent, { ...NOTION_DIALOG_CONFIG, data });
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

}
