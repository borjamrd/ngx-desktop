import { computed, Injectable, signal } from '@angular/core';
import { defaultLayout, SystemElement } from '../types/system-element.type';

@Injectable({
  providedIn: 'root'
})
export class FileExplorerService {

  public defaultFolder = defaultLayout[0]
  private _systemFiles = signal<SystemElement[]>(defaultLayout)
  private _openedFolders = signal<SystemElement[]>([])
  private _openedFiles = signal<SystemElement[]>([])

  public folders = computed(this._openedFolders)
  public systemFiles = computed(this._systemFiles)



  setActiveElement(element: SystemElement) {
    if (element.type === 'folder' || element.type === 'system-folder') {
      this._openedFolders.update((folders) => [...folders, element])
    } else {
      this._openedFiles.update((files) => {
        return [...new Set([...files, element])]
      })
    }

  }


  closeElement(id: SystemElement['id'], type: SystemElement['type']) {

    if (type === 'folder' || type === 'system-folder') {
      this._openedFolders.update((folders) => [
        ...folders.filter((folder) => folder.id !== id)
      ])
    } else {
      this._openedFiles.update((files) => [
        ...files.filter((file) => file.id !== id)
      ])
    }

  }
  public activeFolders() {
    return this.folders
  }

  public activeFiles() {
    return this._openedFiles
  }
}
