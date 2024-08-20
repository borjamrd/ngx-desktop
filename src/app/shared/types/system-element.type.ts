import { KtdGridLayoutItem } from "@katoid/angular-grid-layout";
import { SpotifyWidgetComponent } from "app/components/spotify-widget/spotify-widget.component";


export enum ElementType {
    FOLDER = 'folder',
    FILE = 'file',
    APPLICATION = 'application',
    SYSTEM_FILE = 'system-file',
    DESKTOP_WIDGET = 'desktop-widget'
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
    component?: any;
}


export const defaultLayout: SystemElement[] = [

    {
        icon: 'folder',
        name: 'Folder',
        type: ElementType.FOLDER,
        id: '1',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        hasChildren: true,
        children: [
            {
                icon: 'folder',
                name: 'Folder1',
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
                name: 'Folder4',
                type: ElementType.FOLDER,
                id: '5',
                x: 1,
                y: 1,
                w: 1,
                h: 1,
                hasChildren: false,
                children: []
            },

        ],
    }, {
        'icon': 'folder',
        name: 'Spotify',
        type: ElementType.DESKTOP_WIDGET,
        id: '6',
        x: 8,
        y: 0,
        w: 4,
        h: 2,
        customClass: 'bg-slate-500/40',
        component: SpotifyWidgetComponent,

    }
]