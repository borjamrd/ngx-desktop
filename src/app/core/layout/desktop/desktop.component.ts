import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { VirtualGridComponent } from '@components/virtual-grid/virtual-grid.component';
import { FileExplorerService } from 'app/shared/services/file-explorer.service';
import { SystemElement } from 'app/shared/types/system-element.type';
import { TasksbarComponent } from '../tasksbar/tasksbar.component';

@Component({
  selector: 'bm-desktop',
  standalone: true,
  imports: [TasksbarComponent, VirtualGridComponent, NgClass, AsyncPipe],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {

  private folderService: FileExplorerService = inject(FileExplorerService);

  layout: SystemElement[] = this.folderService.systemFiles()[0].children || [];


}
