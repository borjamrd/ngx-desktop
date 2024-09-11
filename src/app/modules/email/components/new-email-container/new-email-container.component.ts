import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input, model, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { Email, EmailService } from "../../services/email.service";

@Component({
  selector: 'bm-new-email-container',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-email-container.component.html',
  styleUrl: './new-email-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'absolute rounded-t-2xl bottom-0 right-0 min-w-96 w-4/6 shadow-2xl h-4/6 bg-slate-100 dark:bg-slate-800 flex flex-col'
  }
})
export class NewEmailContainerComponent {
  public close = output<void>();
  private emailService = inject(EmailService);

  public form = new FormGroup({
    subject: new FormControl(''),
    to: new FormControl(''),
    content: new FormControl('')
  });


  send() {
    if (this.form.valid) {
      this.emailService.sendEmail({
        id: crypto.randomUUID(),
        message: this.form.value.content as string,
        sendedAt: new Date(),
        subject: this.form.value.subject as string,
        to: this.form.value.to as string,
        folder: 'sent',
        from: 'borja@gmail.com'
      })
    } else {
      this.form.markAllAsTouched();
    }
  }

}
