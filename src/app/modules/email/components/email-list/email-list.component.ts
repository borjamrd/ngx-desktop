import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, input, output, signal } from '@angular/core';
import { Email, EmailService } from "../../services/email.service";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InputComponent } from "app/shared/components/input/input.component";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
    selector: 'bm-email-list',
    imports: [
        CommonModule,
        MatCheckboxModule,
        InputComponent,
        ReactiveFormsModule
    ],
    templateUrl: './email-list.component.html',
    styleUrl: './email-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'flex flex-col gap-2 max-h-[91%] overflow-auto'
    }
})
export class EmailListComponent {

  public form = new FormGroup({
    search: new FormControl('')
  })

  public searchEmailPlaceholder = 'Buscar correo';
  private emailService = inject(EmailService);
  private destroyRef = inject(DestroyRef);

  public search = signal<string>('');
  public emails = computed(() =>
    this.emailService.emailsByFolder().filter(email =>
      email.subject.toLowerCase().includes(this.search().toLowerCase())
    )
  );
  public emailFolder = this.emailService.selectedFolder;
  public selectedEmail = this.emailService.emailSelected;

  public selectEmail(email: Email) {
    this.emailService.selectEmail(email);
  }

  constructor() {
    this.form.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((value) => {
      if (value.search) {
        this.search.set(value.search);
      } else {
        this.search.set('');
      }
    })
  }

}
