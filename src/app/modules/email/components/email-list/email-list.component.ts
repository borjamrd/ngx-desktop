import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { Email, EmailService } from "../../services/email.service";

@Component({
  selector: 'bm-email-list',
  standalone: true,
  imports: [
    CommonModule,
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
  public emails = this.emailService.emailList;

  public selectEmail(email: Email) {
    this.emailService.selectEmail(email);
  }

}
