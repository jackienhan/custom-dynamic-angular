
import { NgModule } from '@angular/core';

import { DashBoardComponent } from './dash-board/dash-board.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashBoardComponent,
    data: { preload: true, delay: true },
    children: [
      {
        path: 'drop-down',
        loadChildren: () => import('../app/module/drop-down/drop-down.module').then(m => m.DropDownModule),
      },
      {
        path: 'page-tab',
        loadChildren: () => import('../app/module/tabs/tabs.module').then(m => m.TabsModule)
      }
    ]
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
