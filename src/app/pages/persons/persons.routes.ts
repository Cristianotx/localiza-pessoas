import { Routes } from '@angular/router';

export const PERSONS_ROUTES: Routes = [{
    path: '',
    redirectTo: 'missing',
    pathMatch: 'full',
},
{
    path: 'missing',
    loadComponent: () => import('./missing/missing.component').then(c => c.MissingComponent),
},
{
    path: 'localized',
    loadComponent: () => import('./localized/localized.component').then(c => c.LocalizedComponent),
}
];
