import { MatDialogConfig } from "@angular/material/dialog"

export const MEDIUM_DIALOG_CONFIG: MatDialogConfig = {
    maxWidth: '100vw',
    maxHeight: 'calc(100vh - 3rem)', //tasksbar height
    width: '800px',
    height: '600px',
    panelClass: ['medium-container', 'resizable-mat-dialog-panel'],
    hasBackdrop: false,
    autoFocus: true,
    restoreFocus: false,
}
export const FILE_DIALOG_CONFIG: MatDialogConfig = {
    maxWidth: '100vw',
    maxHeight: 'calc(100vh - 3rem)', //tasksbar height
    width: '800px',
    height: '600px',
    panelClass: ['file-container', 'resizable-mat-dialog-panel'],
    hasBackdrop: false,
    autoFocus: true,
    restoreFocus: false,
}

export const FOLDER_DIALOG_CONFIG: MatDialogConfig = {
    maxWidth: '100vw',
    maxHeight: 'calc(100vh - 3rem)', //tasksbar height
    width: '800px',
    height: '600px',
    panelClass: ['resizable-mat-dialog-panel', 'window-container'],
    hasBackdrop: false,
    autoFocus: true,
    restoreFocus: false
}

export const NOTION_DIALOG_CONFIG: MatDialogConfig = {
    maxWidth: '100vw',
    maxHeight: 'calc(100vh - 3rem)', //tasksbar height
    width: '1000px',
    height: '600px',
    panelClass: ['notion-container', 'resizable-mat-dialog-panel'],
    hasBackdrop: false,
    autoFocus: true,
    restoreFocus: false
}

export const GLOBAL_SEARCH_DIALOG_CONFIG: MatDialogConfig = {
    maxWidth: '100vw',
    maxHeight: '100vh',
    width: '600px',
    height: '350px',
    panelClass: ['global-search-container'],
    hasBackdrop: true,
    autoFocus: true,
    restoreFocus: false
}