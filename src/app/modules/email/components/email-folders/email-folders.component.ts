import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EmailFolder } from '../email-view/email-view.component';
import { Email, EmailService } from '../../services/email.service';

@Component({
    selector: 'bm-email-folders',
    imports: [CommonModule, MatIconModule],
    templateUrl: './email-folders.component.html',
    styleUrl: './email-folders.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'flex flex-col gap-3',
    },
})
export class EmailFoldersComponent {
    public selectedEmail = input<Email | null>();
    emailFolders: EmailFolder[] = [
        {
            name: 'Inbox',
            icon: 'inbox',
            color: '#58A55C',
            folderType: 'inbox',
        },
        {
            name: 'Destacados',
            icon: 'star',
            color: '#F2BE42',
            folderType: 'favorite',
        },
        {
            name: 'Sent',
            icon: 'send',
            color: '#5186EC',
            folderType: 'sent',
        },
        {
            name: 'Draft',
            icon: 'edit_document',
            color: '#F2BE42',
            folderType: 'draft',
        },
        {
            name: 'Spam',
            icon: 'warning',
            color: '#D95140',
            folderType: 'spam',
        },
        {
            name: 'Trash',
            icon: 'delete_outline',
            color: '#D95140',
            folderType: 'trash',
        },
    ];

    private emailService = inject(EmailService);
    selectFolder(folder: EmailFolder) {
        this.emailService.selectFolder(folder);
    }
}
