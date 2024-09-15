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
import { EmailFoldersComponent } from "../email-folders/email-folders.component";


export interface EmailFolder {
  name: string;
  icon: string;
  color: string;
  folderType: Email['folderType']
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
    MatButtonModule,
    EmailFoldersComponent
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

  private crd = inject(ChangeDetectorRef)
  private destroyRef = inject(DestroyRef)
  private elementRef = inject(ElementRef)
  private emailService = inject(EmailService);

  public emails = this.emailService.emailsByFolder;
  public newEmail = signal(false);
  public selectedEmail = signal<Email | null>(null);
  public containerClasses = signal<Record<string, string>>({
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
