import { Component, EventEmitter, inject, Injector, Input, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FileExplorerService } from 'app/shared/services/file-explorer.service';
import { SystemElement } from 'app/shared/types/system-element.type';
import { from } from 'rxjs';
import { WindowContainerComponent } from '../../window-container/window-container.component';
import { NgClass, NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { NotionContainerComponent } from 'app/components/notion-container/notion-container.component';

@Component({
  selector: 'bm-cell-container',
  standalone: true,
  imports: [MatIconModule, NgClass, NgComponentOutlet, NgTemplateOutlet, MatIconModule],
  templateUrl: './cell-container.component.html',
  styleUrl: './cell-container.component.scss',
})

export class CellContainerComponent {

  private injector: Injector = inject(Injector);
  private lazzyLoadFolderDatabase$ = from(import('@components/folder-database/folder-database.component').then(component => component.FolderDatabaseComponent));

  @Input() element!: SystemElement;
  @Input() parentIsDesktop: boolean = false;
  @Output() onRightClick = new EventEmitter<SystemElement['type']>();
  @Output() onDoubleClick = new EventEmitter<SystemElement['type']>();

  dialog: MatDialog = inject(MatDialog);

  fileExplorer: FileExplorerService = inject(FileExplorerService);

  onRightClickGridItem(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    alert('alert child');
  }


  openFolder(element: SystemElement) {

    switch (element.type) {
      case 'folder':
        this.openFolderDialog(element);
        break;
      case 'file':
        this.openFile(element)
        break;
      case 'application':
        this.openFile(element)
        break;
      default:
        break;
    }


  }
  openFolderDialog(element: SystemElement) {

    const matDialogConfig: MatDialogConfig = {
      maxWidth: '100vw',
      maxHeight: 'calc(100vh - 3rem)', //tasksbar height
      width: '600px',
      height: '400px',
      panelClass: 'window-container',
      hasBackdrop: false,
      autoFocus: true,
      restoreFocus: false,
      data: {
        id: element.id,
        icon: element.icon,
        name: element.name,
        component: this.lazzyLoadFolderDatabase$,
        inputs: {
          layout: element.children
        }
      },

    }

    const dialogRef = this.dialog.open(WindowContainerComponent, matDialogConfig);

    this.fileExplorer.setActiveFolders(element);
  }
  openFile(element: SystemElement) {
    const matDialogConfig: MatDialogConfig = {
      maxWidth: '100vw',
      maxHeight: 'calc(100vh - 3rem)', //tasksbar height
      width: '600px',
      height: '400px',
      panelClass: 'window-container',
      hasBackdrop: false,
      autoFocus: true,
      restoreFocus: false,
      data: {
        id: element.id,
        icon: element.icon,
        name: element.name,
        component: this.lazzyLoadFolderDatabase$,
        inputs: {
          layout: element.children
        }
      },

    }

    const dialogRef = this.dialog.open(NotionContainerComponent, matDialogConfig);


  }


  customInjector(element: SystemElement) {
    return Injector.create({ providers: [{ provide: 'layout', useValue: [], }], parent: this.injector });
  }

}
