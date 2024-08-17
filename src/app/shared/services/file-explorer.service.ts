import { Injectable, signal } from '@angular/core';
import { defaultLayout, FolderElement, SystemElement } from '../types/system-element.type';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class FileExplorerService {


  systemFiles = signal<SystemElement[]>(defaultLayout)
  folders = signal<FolderElement[]>([])
  folders$: Observable<FolderElement[]> = toObservable(this.folders)
  constructor() { }


  setActiveFolders(file: FolderElement) {
    this.folders.set([...this.folders(), file])
  }


  get activeFolders(): Observable<FolderElement[]> {
    return toObservable(this.folders)
  }

  closeFolder(id: FolderElement['id']) {
    this.folders.set(this.folders().filter(folder => folder.id !== id))
  }
}
