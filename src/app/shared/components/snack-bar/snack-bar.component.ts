import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatSnackBarRef
} from '@angular/material/snack-bar';

@Component({
    selector: 'bm-snack-bar',
    imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
    templateUrl: './snack-bar.component.html',
    styleUrl: './snack-bar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackBarComponent {
  snackBarRef = inject(MatSnackBarRef);

}
