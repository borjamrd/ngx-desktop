import { KtdGridLayoutItem } from "@katoid/angular-grid-layout";
import { SpotifyWidgetComponent } from "@modules/desktop/spotify-widget/spotify-widget.component";


export enum ElementType {
    FOLDER = 'folder',
    FILE = 'file',
    APPLICATION = 'application',
    SYSTEM_FILE = 'system-file',
    DESKTOP_WIDGET = 'desktop-widget',
    SYSTEM_FOLDER = 'system-folder'
}

// export interface FolderElement { id: string, name: string }

export interface SystemElement extends KtdGridLayoutItem {
    icon: string;
    name: string;
    type: ElementType;
    hasChildren?: boolean;
    customClass?: string;
    children?: SystemElement[];
    component?: any; //I don't know what to put here
    resizable?: boolean,
    fileData?: {
        url: string,
        fileType: string
    }
}


export const defaultLayout: SystemElement[] = [

    {
        icon: 'desktop',
        name: 'Desktop',
        type: ElementType.SYSTEM_FOLDER,
        id: crypto.randomUUID(),
        hasChildren: true,
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        children: [
            {
                icon: 'folder',
                name: 'My tech',
                type: ElementType.FOLDER,
                id: crypto.randomUUID(),
                x: 0,
                y: 0,
                w: 1,
                h: 1,
                hasChildren: true,
                resizable: false,
                children: [
                    {
                        icon: 'folder',
                        name: 'Backend',
                        type: ElementType.FOLDER,
                        id: crypto.randomUUID(),
                        x: 0,
                        y: 0,
                        w: 1,
                        h: 1,
                        hasChildren: true,
                        children: [
                            {
                                icon: 'folder',
                                name: 'Folder2',
                                type: ElementType.FOLDER,
                                id: crypto.randomUUID(),
                                x: 0,
                                y: 0,
                                w: 1,
                                h: 1,
                                hasChildren: false,
                                children: []
                            },
                            {
                                icon: 'folder',
                                name: 'Folder3',
                                type: ElementType.FOLDER,
                                id: crypto.randomUUID(),
                                x: 1,
                                y: 1,
                                w: 1,
                                h: 1,
                                hasChildren: false,
                                children: []
                            }
                        ]
                    },
                    {
                        icon: 'folder',
                        name: 'Frontend',
                        type: ElementType.FOLDER,
                        id: crypto.randomUUID(),
                        x: 1,
                        y: 1,
                        w: 1,
                        h: 1,
                        hasChildren: false,
                        children: []
                    },
                    {
                        icon: 'folder',
                        name: 'Common',
                        type: ElementType.FOLDER,
                        id: crypto.randomUUID(),
                        x: 1,
                        y: 1,
                        w: 1,
                        h: 1,
                        hasChildren: false,
                        children: [
                            {
                                icon: 'javascript',
                                name: 'Folder2',
                                type: ElementType.FILE,
                                id: crypto.randomUUID(),
                                x: 0,
                                y: 0,
                                w: 1,
                                h: 1,
                                fileData: {
                                    url: 'assets/icons/javascript.svg.svg',
                                    fileType: 'image/svg+xml',
                                },
                                hasChildren: false,
                                children: []
                            },
                            {
                                icon: 'typescript',
                                name: 'Typescript',
                                type: ElementType.FILE,
                                id: crypto.randomUUID(),
                                fileData: {
                                    url: 'assets/icons/typescript.svg',
                                    fileType: 'image/svg+xml',
                                },
                                x: 1,
                                y: 1,
                                w: 1,
                                h: 1,

                            },
                            {
                                icon: 'angular',
                                name: 'angular',
                                type: ElementType.FILE,
                                id: crypto.randomUUID(),
                                fileData: {
                                    url: 'assets/icons/angular.svg',
                                    fileType: 'image/svg+xml',
                                },
                                x: 1,
                                y: 1,
                                w: 1,
                                h: 1,

                            }
                        ]
                    },


                ],
            },
            {
                'icon': 'folder',
                name: 'Spotify',
                type: ElementType.DESKTOP_WIDGET,
                id: crypto.randomUUID(),
                x: 12,
                y: 0,
                w: 4,
                h: 2,
                customClass: 'bg-slate-500/40',
                component: SpotifyWidgetComponent,
                resizable: true
            },
            {
                icon: 'notion',
                name: 'Notion',
                id: crypto.randomUUID(),
                x: 1,
                y: 0,
                w: 1,
                h: 1,
                hasChildren: false,
                type: ElementType.APPLICATION,
                resizable: false
            },
            {
                icon: 'medium',
                name: 'Medium',
                id: crypto.randomUUID(),
                x: 2,
                y: 0,
                w: 1,
                h: 1,
                hasChildren: false,
                type: ElementType.APPLICATION,
                resizable: false
            },
            {
                icon: 'gmail',
                name: 'Gmail',
                id: crypto.randomUUID(),
                x: 0,
                y: 1,
                w: 1,
                h: 1,
                hasChildren: false,
                type: ElementType.APPLICATION,
                resizable: false
            },
            {
                icon: 'trash',
                name: 'Papelera de reciclaje',
                id: crypto.randomUUID(),
                x: 0,
                y: 2,
                w: 1,
                h: 1,
                hasChildren: true,
                children: [
                    {
                        icon: 'gif',
                        name: 'ahahah.gif',
                        id: crypto.randomUUID(),
                        x: 0,
                        y: 3,
                        w: 1,
                        h: 1,
                        hasChildren: false,
                        type: ElementType.FILE,
                        fileData: {
                            url: 'assets/images/ahahah.gif',
                            fileType: 'image/gif',
                        },
                    },
                ],
                type: ElementType.FOLDER,
                resizable: false,
            },
            {
                icon: 'pdf',
                name: 'CV_Borja_ES.pdf',
                id: crypto.randomUUID(),
                x: 0,
                y: 3,
                w: 1,
                h: 1,
                hasChildren: false,
                type: ElementType.FILE,
                fileData: {
                    url: 'assets/files/ES_BorjaMunoz_FullStack_CV.pdf',
                    fileType: 'application/pdf',
                },
            },
            {
                icon: 'pdf',
                name: 'CV_Borja_EN.pdf',
                id: crypto.randomUUID(),
                x: 0,
                y: 4,
                w: 1,
                h: 1,
                hasChildren: false,
                type: ElementType.FILE,

                fileData: {
                    url: 'assets/files/EN_BorjaMunoz_FullStack_CV_English.pdf',
                    fileType: 'application/pdf',
                },
            },
            {
                icon: 'markdown',
                name: 'readme',
                id: crypto.randomUUID(),
                x: 0,
                y: 5,
                w: 1,
                h: 1,
                hasChildren: false,
                type: ElementType.FILE,

                fileData: {
                    url: 'assets/files/readme.md',
                    fileType: 'text/markdown',
                },
            },
        ]
    }
]