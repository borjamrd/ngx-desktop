import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./core/layout/desktop/desktop.component').then(m => m.DesktopComponent)
    }
];
