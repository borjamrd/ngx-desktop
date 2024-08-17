import { KtdGridLayoutItem } from "@katoid/angular-grid-layout";


export interface SystemElement extends KtdGridLayoutItem {
    icon: string;
    name: string;
    hasChildren?: boolean;
    children: SystemElement[];
}

export const defaultLayout: SystemElement[] = [{
    icon: 'folder',
    name: 'Folder',
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
                    id: '3',
                    x: 0,
                    y: 0,
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