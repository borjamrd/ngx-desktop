import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotionContainerComponent } from 'app/components/notion-container/notion-container.component';
import { from } from 'rxjs';
import { SystemElement } from '../types/system-element.type';
import { FileExplorerService } from './file-explorer.service';
import { MediumContainerComponent } from 'app/components/medium-container/medium-container.component';
import { WindowContainerComponent } from 'app/components/window-container/window-container.component';
import { FOLDER_DIALOG_CONFIG, MEDIUM_DIALOG_CONFIG, NOTION_DIALOG_CONFIG } from '../utils/utils';


export interface IDisplayElementWindowService {
  open: (element: SystemElement) => void;
}
@Injectable({
  providedIn: 'root'
})
export class DisplayElementWindowService implements IDisplayElementWindowService {


  dialog: MatDialog = inject(MatDialog);
  private lazzyLoadFolderDatabase$ = from(import('@components/folder-database/folder-database.component').then(component => component.FolderDatabaseComponent));
  fileExplorer: FileExplorerService = inject(FileExplorerService);
  public open(element: SystemElement): void {

    const data = {
      id: element.id,
      icon: element.icon,
      name: element.name,
      component: this.lazzyLoadFolderDatabase$,
      inputs: {
        layout: element.children
      }
    }

    switch (element.type) {
      case 'folder':
        this.dialog.open(WindowContainerComponent, { ...FOLDER_DIALOG_CONFIG, data });
        break;
      case 'file':
      // use
      case 'application':
        switch (element.name.toLocaleLowerCase()) {
          case 'medium':
            this.dialog.open(MediumContainerComponent, { ...MEDIUM_DIALOG_CONFIG, data });
            break;
          case 'notion':
            this.dialog.open(NotionContainerComponent, { ...NOTION_DIALOG_CONFIG, data });
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
