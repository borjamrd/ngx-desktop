import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ActiveFoldersComponent } from 'app/components/active-folders/active-folders.component';
import { FileExplorerService } from 'app/shared/services/file-explorer.service';
import { ThemeService } from '../../../shared/services/theme.service';
import { MainSearchInputComponent } from 'app/components/main-search-input/main-search-input.component';
@Component({
  selector: 'bm-tasksbar',
  standalone: true,
  imports: [
    ActiveFoldersComponent,
    NgFor,
    NgIf,
    AsyncPipe,
    MatIconModule,
    MatSlideToggleModule,
    MainSearchInputComponent,
  ],
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
