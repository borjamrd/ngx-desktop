import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NewEmailContainerComponent } from "../new-email-container/new-email-container.component";
import { EmailListComponent } from "../email-list/email-list.component";
import { EmailContentComponent } from "../email-content/email-content.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Email, EmailService } from "../../services/email.service";


export interface EmailFolder {
  name: string;
  icon: string;
  color: string;
}
@Component({
  selector: 'bm-email-view',
  standalone: true,
  imports: [
    CommonModule,
    EmailListComponent,
    NewEmailContainerComponent,
    EmailContentComponent,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './email-view.component.html',
  styleUrl: './email-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex relative w-full h-full relative'
  }
})
export class EmailViewComponent {

  emailFolders: EmailFolder[] = [
    {
      name: 'Inbox',
      icon: 'inbox',
      color: '#58A55C'
    },
    {
      name: 'Sent',
      icon: 'sent',
      color: '#5186EC'
    },
    {
      name: 'Draft',
      icon: 'edit_document',
      color: '#F2BE42'
    },
    {
      name: 'Spam',
      icon: 'warning',
      color: '#D95140'
    },
    {
      name: 'Trash',
      icon: 'delete_outline',
      color: '#D95140'
    }
  ]

  newEmail = signal(false);

  selectedEmail = signal<Email | null>(null);
  private emailService = inject(EmailService);
  public emails = this.emailService.emailList();
}
