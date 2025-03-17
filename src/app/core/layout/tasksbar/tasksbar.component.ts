import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActiveFoldersComponent } from '@modules/folder/active-folders/active-folders.component';
import { ThemeService } from '@services/theme.service';
import { InputComponent } from 'app/shared/components/input/input.component';
import { NavbarClockComponent } from 'app/shared/components/navbar-clock/navbar-clock.component';
import { SnackBarComponent } from 'app/shared/components/snack-bar/snack-bar.component';
import { ActiveFilesComponent } from '../../../modules/file/active-files/active-files.component';
@Component({
    selector: 'bm-tasksbar',
    imports: [
        ActiveFoldersComponent,
        MatIconModule,
        MatSlideToggleModule,
        InputComponent,
        ActiveFilesComponent,
        NavbarClockComponent,
    ],
    templateUrl: './tasksbar.component.html',
    styleUrl: './tasksbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'z-[99999] absolute h-12 backdrop-blur-lg bottom-0 w-full px-3 py-1 hidden sm:flex border-t-[1px] border-slate-200 shadow-teal-300 dark:border-t-gray-600 bg-slate-100/60 dark:bg-neutral-600/40 shadow-sm items-center',
    },
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
