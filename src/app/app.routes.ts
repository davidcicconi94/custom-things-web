import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./layout/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    }
];
