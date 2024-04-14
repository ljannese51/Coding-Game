import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnteprimaBaseComponent } from './anteprima-base/anteprima-base.component';

const routes: Routes = [  {
  path: 'anteprima-moderato', title: 'Anteprima Esercizio Moderato',
  children: [
    {
      title: "Anteprima Esercizio Moderato List", path: 'list',
      loadChildren: () => import('./anteprima-moderato/anteprima-moderato.module').then(m => m.AnteprimaModeratoModule)
    }
  ],

},
{
  path: 'anteprima-base', title: 'Anteprima Esercizio Base',
  children: [
    {
      title: "Anteprima Esercizio Base List", path: 'list',
      loadChildren: () => import('./anteprima-base/anteprima-base.module').then(m => m.AnteprimaBaseModule)
    }
  ],

},
{ path: '', component: AnteprimaBaseComponent, title: 'Anteprima Esercizio Base', pathMatch: 'full' },
{ path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
