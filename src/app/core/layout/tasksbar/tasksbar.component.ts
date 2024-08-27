import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ActiveFoldersComponent } from '@modules/folder/active-folders/active-folders.component';
import { FileExplorerService } from '@services/file-explorer.service';
import { ThemeService } from '@services/theme.service';
import { MainSearchInputComponent } from '@components/main-search-input/main-search-input.component';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'z-[99999] absolute h-12 backdrop-blur-lg bottom-0 w-full px-3 py-1 hidden sm:flex border-t-[1px] border-slate-200 shadow-teal-300 dark:border-t-gray-600 bg-slate-100/60 dark:bg-neutral-600/40 shadow-sm items-center'
  }
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
