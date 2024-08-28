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

export interface FolderElement {
    id: SystemElement['id'];
    icon: SystemElement['icon'];
    name: SystemElement['name'];
}


export interface SystemElement extends KtdGridLayoutItem {
    icon: string;
    name: string;
    type: ElementType;
    hasChildren?: boolean;
    customClass?: string;
    children?: SystemElement[];
    component?: any; //I don't know what to put here
    resizable?: boolean
}


export const defaultLayout: SystemElement[] = [

    {
        icon: 'desktop',
        name: 'Desktop',
        type: ElementType.SYSTEM_FOLDER,
        id: '122',
        hasChildren: true,
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        children: [{
            icon: 'folder',
            name: 'My tech',
            type: ElementType.FOLDER,
            id: '1',
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
                    id: '2',
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
                            id: '3',
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
                            id: '4',
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
                    id: '5',
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
                    id: '9',
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
                            id: '10',
                            x: 0,
                            y: 0,
                            w: 1,
                            h: 1,
                            hasChildren: false,
                            children: []
                        },
                        {
                            icon: 'typescript',
                            name: 'Typescript',
                            type: ElementType.FILE,
                            id: '11',
                            x: 1,
                            y: 1,
                            w: 1,
                            h: 1,

                        },
                        {
                            icon: 'angular',
                            name: 'angular',
                            type: ElementType.FILE,
                            id: '11',
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
            id: '6',
            x: 12,
            y: 0,
            w: 4,
            h: 2,
            customClass: 'bg-slate-500/40',
            component: SpotifyWidgetComponent,
            resizable: true
        }, {
            icon: 'notion',
            name: 'Notion',
            id: '7',
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
            id: '8',
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
            id: '9',
            x: 0,
            y: 1,
            w: 1,
            h: 1,
            hasChildren: false,
            type: ElementType.APPLICATION,
            resizable: false
        },
        ]
    }
]