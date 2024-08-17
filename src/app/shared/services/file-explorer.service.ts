import { Injectable, signal } from '@angular/core';
import { SystemElement } from '../types/system-element.type';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class FileExplorerService {


  files = signal<SystemElement[]>([])
  files$: Observable<SystemElement[]> = toObservable(this.files)
  constructor() { }


  setActiveFiles(file: SystemElement) {
    this.files.set([...this.files(), file])
  }


  get activeFiles() {
    return toObservable(this.files)
  }

  closeFile(file: SystemElement) {
    this.files.update((files) => files.filter((f: any) => f !== file))
  }
}
