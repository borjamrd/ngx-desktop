import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { Email, EmailService } from "../../services/email.service";
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'bm-email-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  templateUrl: './email-list.component.html',
  styleUrl: './email-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-2 max-h-[91%] overflow-auto'
  }
})
export class EmailListComponent {

  private emailService = inject(EmailService);
  public emails = this.emailService.getEmailList();
  public selectedEmail = this.emailService.emailSelected;

  public selectEmail(email: Email) {
    this.emailService.selectEmail(email);
  }

}
