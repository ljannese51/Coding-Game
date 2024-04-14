import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnteprimaBaseComponent } from './anteprima-base.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: AnteprimaBaseComponent, pathMatch: 'full'
      },
    ]),
  ],
})
export class AnteprimaBaseRoutingModule { }
