import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileDialogComponent } from '@modules/file/file-dialog/file-dialog.component';
import { MediumDialogComponent } from 'app/modules/medium/components/medium-dialog/medium-dialog.component';
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


  private dialog: MatDialog = inject(MatDialog);
  private lazzyLoadFolderDatabase$ = from(import('@modules/folder/folder-database/folder-database.component').then(component => component.FolderDatabaseComponent));
  private fileExplorer: FileExplorerService = inject(FileExplorerService);

  public open(element: SystemElement): void {


    const data = {
      id: element.id,
      type: element.type,
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
      case 'system-folder':
        const activeFolders = this.fileExplorer.activeFolders()().filter(af => af.id === element.id)
        if (activeFolders.length >= 1) return;
        this.dialog.open(WindowDialogComponent, { ...FOLDER_DIALOG_CONFIG, data });

        break;
      case 'file':
        this.dialog.open(FileDialogComponent, { ...FILE_DIALOG_CONFIG, data, });
        break
      case 'application':
        switch (element.name.toLocaleLowerCase()) {
          case 'medium':
            this.dialog.open(MediumDialogComponent, { ...MEDIUM_DIALOG_CONFIG, data });
            break;
          case 'notion':
            this.dialog.open(NotionDialogComponent, { ...NOTION_DIALOG_CONFIG, data });
            break;
          default:

            //TODO show toast: incompatible file/folder
            break;
        }
        break;
      default:
        break;
    }
    this.fileExplorer.setActiveElement(element)
  }

}
