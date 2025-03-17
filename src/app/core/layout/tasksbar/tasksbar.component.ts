import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ActiveFoldersComponent } from '@modules/folder/active-folders/active-folders.component';
import { FileExplorerService } from '@services/file-explorer.service';
import { ThemeService } from '@services/theme.service';
import { InputComponent } from 'app/shared/components/input/input.component';
import { SystemElement } from 'app/shared/types/system-element.type';
import { ActiveFilesComponent } from "../../../modules/file/active-files/active-files.component";
import { NavbarClockComponent } from 'app/shared/components/navbar-clock/navbar-clock.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'app/shared/components/snack-bar/snack-bar.component';
@Component({
    selector: 'bm-tasksbar',
    imports: [
        ActiveFoldersComponent,
        NgFor,
        NgIf,
        AsyncPipe,
        MatIconModule,
        MatSlideToggleModule,
        InputComponent,
        ActiveFilesComponent,
        NavbarClockComponent
    ],
    templateUrl: './tasksbar.component.html',
    styleUrl: './tasksbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'z-[99999] absolute h-12 backdrop-blur-lg bottom-0 w-full px-3 py-1 hidden sm:flex border-t-[1px] border-slate-200 shadow-teal-300 dark:border-t-gray-600 bg-slate-100/60 dark:bg-neutral-600/40 shadow-sm items-center'
    }
})
export class TasksbarComponent {

  private _snackBar = inject(MatSnackBar);
  public themeService: ThemeService = inject(ThemeService);


  toggleTheme() {
    this.themeService.updateTheme();
  }
  showSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      verticalPosition: 'top',
      duration: 4000,
    });
  }

}
