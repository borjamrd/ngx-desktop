import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Email, EmailService } from "../../services/email.service";

@Component({
  selector: 'bm-email-content',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './email-content.component.html',
  styleUrl: './email-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailContentComponent {
  private emailService = inject(EmailService);
  public email = this.emailService.emailSelected;


}
