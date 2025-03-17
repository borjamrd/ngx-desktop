import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'bm-form-field',
    standalone: true,
    imports: [MatFormFieldModule],
    templateUrl: './form-field.component.html',
    styleUrl: './form-field.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent implements MatFormFieldModule {}
