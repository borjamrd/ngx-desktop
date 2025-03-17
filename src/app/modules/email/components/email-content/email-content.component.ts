import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
} from '@angular/core';
import { Email, EmailService } from '../../services/email.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BadgeDirective } from 'app/shared/directives/badge.directive';

@Component({
    selector: 'bm-email-content',
    imports: [
        BadgeDirective,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
    ],
    templateUrl: './email-content.component.html',
    styleUrl: './email-content.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailContentComponent {
    private emailService = inject(EmailService);
    public email = this.emailService.emailSelected;
    public noEmailText = 'No se ha seleccionado ninguna conversación.';
}
