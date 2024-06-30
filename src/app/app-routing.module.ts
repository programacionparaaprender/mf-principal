import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ComponenteLocalComponent } from './views/componente-local/componente-local.component';


const routes: Routes = [
  { path: '' , component: ComponenteLocalComponent},
  {
    path: 'remoto',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './RemotoComponent',
      }).then((m) => m.RemotoComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
