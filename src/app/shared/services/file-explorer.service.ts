import { Injectable, signal } from '@angular/core';
import { defaultLayout, FolderElement, SystemElement } from '../types/system-element.type';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class FileExplorerService {


  defaultFolders = [defaultLayout[0]]
  systemFiles = signal<SystemElement[]>(defaultLayout)
  folders = signal<FolderElement[]>(this.defaultFolders)
  folders$: Observable<FolderElement[]> = toObservable(this.folders)
  constructor() {
  }


  setActiveFolders(file: FolderElement) {
    if (!this.folders().includes(file)) {
      this.folders.set([...this.folders(), file])
    }

  }


  get activeFolders(): Observable<FolderElement[]> {
    return toObservable(this.folders)
  }

  closeFolder(id: FolderElement['id']) {

    this.folders.set(this.folders().filter(folder => folder.id !== id))
    if (this.folders().length <= 1) {
      this.folders.set(this.defaultFolders)
    }

  }
}
