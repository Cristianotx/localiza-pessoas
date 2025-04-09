import { Routes } from '@angular/router';

export const PERSONS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/list.component').then((c) => c.PersonsListComponent),
  },
  {
    path: ':id/detail',
    loadComponent: () => import('./detail/detail.component').then((c) => c.PersonsDetailComponent),
  },
];
