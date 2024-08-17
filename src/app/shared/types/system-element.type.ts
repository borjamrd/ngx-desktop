import { KtdGridLayoutItem } from "@katoid/angular-grid-layout";


enum ElementType {
    FOLDER = 'folder',
    FILE = 'file',
    APPLICATION = 'application',
    SYSTEM_WINDOW = 'system-window',
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
    children: SystemElement[];
}

export const defaultLayout: SystemElement[] = [{
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
        }
    ]
},
]