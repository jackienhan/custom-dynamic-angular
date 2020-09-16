import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DropDownComponent} from '../../drop-down/drop-down.component';

const routeDropDown: Routes = [
  {
    path: '',
    component: DropDownComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routeDropDown)
  ],
  exports: [RouterModule]
})
export class DropDownRoutingModule { }
