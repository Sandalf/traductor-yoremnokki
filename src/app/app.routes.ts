import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/dictionary/dictionary.component').then(c => c.DictionaryComponent)
  },
];
