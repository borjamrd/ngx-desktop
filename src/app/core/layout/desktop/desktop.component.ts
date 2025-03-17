import { Component, computed, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalSearchDialogComponent } from 'app/modules/global-search/components/global-search-dialog/global-search-dialog.component';
import { VirtualGridComponent } from 'app/shared/components/virtual-grid/virtual-grid.component';
import { FileExplorerService } from 'app/shared/services/file-explorer.service';
import { TasksbarComponent } from '../tasksbar/tasksbar.component';
import { GLOBAL_SEARCH_DIALOG_CONFIG } from './../../../shared/utils/dialogs';

@Component({
    selector: 'bm-desktop',
    imports: [TasksbarComponent, VirtualGridComponent],
    templateUrl: './desktop.component.html',
    styleUrl: './desktop.component.scss',
    host: {
        '(window:keydown.control.k)': 'onKeydown($event)',
    }
})
export class DesktopComponent {

  private folderService: FileExplorerService = inject(FileExplorerService);
  layout = computed(() => this.folderService._systemFiles());
  private dialog: MatDialog = inject(MatDialog);

  private open = signal<boolean>(false)

  onKeydown(event: KeyboardEvent) {
    event.preventDefault();
    this.open.set(!this.open())
    if (this.open()) {
      this.dialog.open(GlobalSearchDialogComponent,
        GLOBAL_SEARCH_DIALOG_CONFIG
      ).id = 'global-search-dialog';
    } else {
      this.dialog.getDialogById('global-search-dialog')?.close();
      this.open.set(false)
    }


  }

}
