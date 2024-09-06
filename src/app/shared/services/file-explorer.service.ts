import { computed, effect, Injectable, signal } from '@angular/core';
import { defaultLayout, SystemElement } from '../types/system-element.type';

export interface DialogElement extends SystemElement {
  minimized?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class FileExplorerService {

  public defaultFolder: DialogElement[] = defaultLayout.map((element) => ({ ...element, minimized: false }))
  private _systemFiles = signal<DialogElement[]>(this.defaultFolder || [])
  private _openedFolders = signal<DialogElement[]>([])
  private _openedFiles = signal<DialogElement[]>([])

  public folders = computed(this._openedFolders)
  public systemFiles = computed(this._systemFiles)



  setActiveElement(element: DialogElement) {
    if (element.type === 'folder' || element.type === 'system-folder') {
      this._openedFolders.update((folders) => [...folders, { ...element, minimized: false }])
    } else {
      this._openedFiles.update((files) => {
        return [...new Set([...files, { ...element, minimized: false }])]
      })
    }
  }

  minimizeElement(id: SystemElement['id'], type: SystemElement['type']) {
    if (type === 'folder' || type === 'system-folder') {
      this._openedFolders.update((folders) => {
        return folders.map((folder) => {
          if (folder.id === id) {
            return { ...folder, minimized: true }
          }
          return folder
        })
      })
    } else {
      this._openedFiles.update((files) => {
        return files.map((file) => {
          if (file.id === id) {
            return { ...file, minimized: true }
          }
          return file
        })
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

  addToFavorites(element: SystemElement) {
    alert('Working on this')
  }
}
