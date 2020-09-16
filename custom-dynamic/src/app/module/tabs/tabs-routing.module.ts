import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PageTabComponent} from '../../tabs/page-tab/page-tab.component';

const routesTab: Routes = [
  {
    path: '',
    component: PageTabComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesTab)
  ],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
