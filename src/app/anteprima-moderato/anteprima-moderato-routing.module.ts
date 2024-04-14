import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnteprimaModeratoComponent } from './anteprima-moderato.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: AnteprimaModeratoComponent, pathMatch: 'full'
      },
    ]),
  ],
})
export class AnteprimaModeratoRoutingModule { }
