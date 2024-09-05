import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DisplayElementWindowService } from 'app/shared/services/display-element-window.service';
import { FileExplorerService } from 'app/shared/services/file-explorer.service';
import { SystemElement } from 'app/shared/types/system-element.type';
import { slideInOut } from 'app/shared/utils/transitions';


@Component({
  selector: 'bm-active-folders',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './active-folders.component.html',
  styleUrl: './active-folders.component.scss',
  animations: [slideInOut]

})
export class ActiveFoldersComponent {

  private fileExplorer: FileExplorerService = inject(FileExplorerService);
  public activeFolders = this.fileExplorer.activeFolders()

  public defaultFolder = this.fileExplorer.defaultFolder
  private readonly displayElementWindowService = inject(DisplayElementWindowService);


  handleOpenFolder(element: SystemElement = this.defaultFolder[0]): void {
    this.displayElementWindowService.open(element)
  }

}
