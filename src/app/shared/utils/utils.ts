import { MatDialogConfig } from "@angular/material/dialog";
import { NotionBlock } from "@modules/notion/types/notion.interface"

/**
 * Removes and item from an array. Returns a new array instance (it doesn't mutate the source array).
 * @param array source array to be returned without the element to remove
 * @param condition function that will return true for the item that we want to remove
 */
export function ktdArrayRemoveElement<T>(
  array: T[],
  condition: (item: T) => boolean,
) {
  const arrayCopy = [...array];
  const index = array.findIndex((item) => condition(item));
  if (index > -1) {
    arrayCopy.splice(index, 1);
  }
  return arrayCopy;
}



export function maxZIndex(selectors: string = 'body *'): number {
  return Array.from(document.querySelectorAll(selectors))
    .map(a => parseFloat(window.getComputedStyle(a).zIndex))
    .filter(a => !isNaN(a))
    .sort((a, b) => a - b)
    .pop() || 0;
}

export const MEDIUM_DIALOG_CONFIG: MatDialogConfig = {
  maxWidth: '100vw',
  maxHeight: 'calc(100vh - 3rem)', //tasksbar height
  width: '800px',
  height: '600px',
  panelClass: 'medium-container',
  hasBackdrop: false,
  autoFocus: true,
  restoreFocus: false,
}

export const FOLDER_DIALOG_CONFIG: MatDialogConfig = {
  maxWidth: '100vw',
  maxHeight: 'calc(100vh - 3rem)', //tasksbar height
  width: '800px',
  height: '600px',
  panelClass: 'resizable-mat-dialog-panel',
  hasBackdrop: false,
  autoFocus: true,
  restoreFocus: false
}

export const NOTION_DIALOG_CONFIG: MatDialogConfig = {
  maxWidth: '100vw',
  maxHeight: 'calc(100vh - 3rem)', //tasksbar height
  width: '1250px',
  height: '600px',
  panelClass: ['notion-container', 'resizable-mat-dialog-panel'],
  hasBackdrop: false,
  autoFocus: true,
  restoreFocus: false
}


export const getBlockImageURL = (image: string, block: NotionBlock) => {
  const url = new URL(`https://www.notion.so/image/${encodeURIComponent(image)}`);
  if (block) {
    const table =
      block.parent_table === "space" ? "block" : block.parent_table;
    url.searchParams.set("table", table);
    url.searchParams.set("id", block.id);
    url.searchParams.set("cache", "v2");
  }
  return url.toString();
}