
import { NgModule } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ComponenteLocalComponent } from './views/componente-local/componente-local.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '',  redirectTo: '/local', pathMatch: 'full' },
    { path: 'local' , component: ComponenteLocalComponent},
    {
      path: 'remoto',
      loadComponent: () =>
        loadRemoteModule({
          type: 'module',
          //remoteEntry: 'http://localhost:4201/remoteEntry.js',
          remoteEntry: 'http://mf-remoto.s3-website.us-east-2.amazonaws.com/remoteEntry.js',
          exposedModule: './RemotoComponent',
        }).then((m) => m.RemotoComponent),
    }
];
