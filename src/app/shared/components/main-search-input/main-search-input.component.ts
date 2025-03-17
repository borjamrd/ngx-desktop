import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
} from '@angular/core';
import { InputComponent } from '@components/input/input.component';

@Component({
    selector: 'bm-main-search-input',
    standalone: true,
    imports: [InputComponent],
    templateUrl: './main-search-input.component.html',
    styleUrl: './main-search-input.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSearchInputComponent {}
