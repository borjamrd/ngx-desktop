import { computed, effect, Injectable, signal } from '@angular/core';
import { defaultLayout, SystemElement } from '../types/system-element.type';

export interface DialogElement extends SystemElement {
    minimized?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class FileExplorerService {
    public defaultFolder: DialogElement[] = defaultLayout.map((element) => ({
        ...element,
        minimized: false,
    }));
    public _systemFiles = signal<DialogElement[]>(this.defaultFolder || []);
    private _openedFolders = signal<DialogElement[]>([]);
    private _openedFiles = signal<DialogElement[]>([]);

    public folders = computed(this._openedFolders);

    private _favoriteElements = signal<DialogElement[]>([]);
    public favoriteElements = computed(this._favoriteElements);

    setActiveElement(element: DialogElement) {
        if (element.type === 'folder' || element.type === 'system-folder') {
            this._openedFolders.update((folders) => [
                ...folders,
                { ...element, minimized: false },
            ]);
        } else {
            this._openedFiles.update((files) => {
                return [
                    ...new Set([...files, { ...element, minimized: false }]),
                ];
            });
        }
    }

    minimizeElement(id: SystemElement['id'], type: SystemElement['type']) {
        if (type === 'folder' || type === 'system-folder') {
            this._openedFolders.update((folders) => {
                return folders.map((folder) => {
                    if (folder.id === id) {
                        return { ...folder, minimized: true };
                    }
                    return folder;
                });
            });
        } else {
            this._openedFiles.update((files) => {
                return files.map((file) => {
                    if (file.id === id) {
                        return { ...file, minimized: true };
                    }
                    return file;
                });
            });
        }
    }

    closeElement(id: SystemElement['id'], type: SystemElement['type']) {
        if (type === 'folder' || type === 'system-folder') {
            this._openedFolders.update((folders) => [
                ...folders.filter((folder) => folder.id !== id),
            ]);
        } else {
            this._openedFiles.update((files) => [
                ...files.filter((file) => file.id !== id),
            ]);
        }
    }

    addToFavorites(element: SystemElement) {
        this._favoriteElements.update((favorites) => [...favorites, element]);
    }

    removeFromFavorites(element: SystemElement) {
        this._favoriteElements.update((favorites) =>
            favorites.filter((favorite) => favorite.id !== element.id)
        );
    }

    removeElement(id: SystemElement['id']) {
        this._systemFiles.update((files) =>
            this.removeElementRecursively(files, id)
        );
        this._openedFiles.update((files) =>
            this.removeElementRecursively(files, id)
        );
        this._openedFolders.update((files) =>
            this.removeElementRecursively(files, id)
        );
        this._favoriteElements.update((files) =>
            this.removeElementRecursively(files, id)
        );
    }

    private removeElementRecursively(
        elements: SystemElement[],
        idToRemove: string
    ): SystemElement[] {
        return elements.filter((element) => {
            if (element.id === idToRemove) {
                return false;
            }
            if (element.children) {
                element.children = this.removeElementRecursively(
                    element.children,
                    idToRemove
                );
            }
            return true;
        });
    }

    public activeFolders() {
        return this.folders;
    }

    public activeFiles() {
        return this._openedFiles;
    }
    get favorites() {
        return this._favoriteElements;
    }
}
