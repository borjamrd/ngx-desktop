import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FocusDialogDirective } from 'app/shared/directives/focus-dialog.directive';
import { FileExplorerService } from 'app/shared/services/file-explorer.service';
import { EmailViewComponent } from '../email-view/email-view.component';

@Component({
    selector: 'bm-email-dialog',
    imports: [
        DragDropModule,
        MatIconModule,
        FocusDialogDirective,
        EmailViewComponent,
    ],
    templateUrl: './email-dialog.component.html',
    styleUrl: './email-dialog.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailDialogComponent {
    private fileExplorerService = inject(FileExplorerService);

    public dialogRef: MatDialogRef<EmailDialogComponent> = inject(MatDialogRef);
    public data = inject(MAT_DIALOG_DATA);
    public isFullScreen: boolean = false;

    handleHide(): void {
        this.dialogRef.close();
        this.fileExplorerService.minimizeElement(this.data.id, this.data.type);
    }

    onResizeButtonClicked() {
        this.isFullScreen = !this.isFullScreen;

        if (this.isFullScreen) {
            this.dialogRef.removePanelClass('not-fullscreen');
            this.dialogRef.addPanelClass('fullscreen');
            this.dialogRef.updatePosition({ top: '0px', left: '0px' });
            this.dialogRef.updateSize('100vw', 'calc(100vh - 3rem)');
        } else {
            this.dialogRef.removePanelClass('fullscreen');
            this.dialogRef.addPanelClass('not-fullscreen');
            this.dialogRef.updateSize('1000px', '600px');
        }
    }
    handleClose() {
        this.dialogRef.close();
        this.fileExplorerService.closeElement(this.data.id, this.data.type);
    }
}
