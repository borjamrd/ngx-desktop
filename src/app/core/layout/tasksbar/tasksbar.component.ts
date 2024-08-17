import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../../../shared/services/theme.service';
import { FileExplorerService } from 'app/shared/services/file-explorer.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { ActiveFoldersComponent } from 'app/components/active-folders/active-folders.component';
@Component({
  selector: 'bm-tasksbar',
  standalone: true,
  imports: [MatSlideToggleModule, MatIconModule, AsyncPipe, NgIf, NgFor, ActiveFoldersComponent],
  templateUrl: './tasksbar.component.html',
  styleUrl: './tasksbar.component.scss',
})
export class TasksbarComponent {
  themeService: ThemeService = inject(ThemeService);
  fileExplorer: FileExplorerService = inject(FileExplorerService);
  activeFolders$;
  toggleTheme() {
    this.themeService.updateTheme();
  }
  constructor() {
    this.activeFolders$ = this.fileExplorer.activeFolders;
  }
}
