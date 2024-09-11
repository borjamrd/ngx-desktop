import { CommonModule, NgClass } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, ElementRef, inject, signal } from '@angular/core';
import { NewEmailContainerComponent } from "../new-email-container/new-email-container.component";
import { EmailListComponent } from "../email-list/email-list.component";
import { EmailContentComponent } from "../email-content/email-content.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Email, EmailService } from "../../services/email.service";
import { ResizeObserverService } from "app/shared/services/resize-observer.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { mediaQueries } from "app/shared/utils";


export interface EmailFolder {
  name: string;
  icon: string;
  color: string;
  type: Email['folder']
}
@Component({
  selector: 'bm-email-view',
  standalone: true,
  imports: [
    EmailListComponent,
    NgClass,
    NewEmailContainerComponent,
    EmailContentComponent,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './email-view.component.html',
  styleUrl: './email-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ResizeObserverService],
  host: {
    class: 'flex relative w-full h-full relative'
  }
})
export class EmailViewComponent implements AfterViewInit {

  emailFolders: EmailFolder[] = [
    {
      name: 'Inbox',
      icon: 'inbox',
      color: '#58A55C',
      type: 'inbox'
    },
    {
      name: 'Sent',
      icon: 'send',
      color: '#5186EC',
      type: 'sent'
    },
    {
      name: 'Draft',
      icon: 'edit_document',
      color: '#F2BE42',
      type: 'draft'
    },
    {
      name: 'Spam',
      icon: 'warning',
      color: '#D95140',
      type: 'spam'
    },
    {
      name: 'Trash',
      icon: 'delete_outline',
      color: '#D95140',
      type: 'trash'
    }
  ]

  newEmail = signal(false);

  selectedEmail = signal<Email | null>(null);
  private emailService = inject(EmailService);
  public emails = this.emailService.emailList();

  private elementRef = inject(ElementRef)
  private destroyRef = inject(DestroyRef)
  private crd = inject(ChangeDetectorRef)


  containerClasses = signal<Record<string, string>>({
    container: 'flex-row',
    categories: 'w-2/12',
    list: 'w-5/12',
    content: 'w-5/12'
  })


  ngAfterViewInit(): void {
    const container = new ResizeObserverService(this.crd, this.elementRef);
    container.onResize.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((entry) => {
      if (entry.target.clientWidth < mediaQueries.XS) {
        this.containerClasses.set({
          container: 'flex-col',
          categories: 'w-full',
          list: 'w-full',
          content: 'w-full'
        })
      } else if (entry.target.clientWidth < mediaQueries.SM) {
        this.containerClasses.set({
          container: 'flex-row',
          categories: 'w-4/12',
          list: 'w-4/12',
          content: 'w-4/12'
        })
      } else {
        this.containerClasses.set({
          container: 'flex-row',
          categories: 'w-2/12',
          list: 'w-5/12',
          content: 'w-5/12'
        })
      }
    })

  }

}
