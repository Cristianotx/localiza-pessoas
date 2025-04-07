import { Routes } from '@angular/router';

export const PAGES_ROUTES: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
},
{
    path: 'home',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
},
{
    path: 'persons',
    loadChildren: () => import('./persons/persons.routes').then(r => r.PERSONS_ROUTES),
}
];
