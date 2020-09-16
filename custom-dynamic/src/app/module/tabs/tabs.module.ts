import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabsComponent} from '../../tabs/tabs.component';
import {TabComponent} from '../../tabs/tab/tab.component';
import {PageTabComponent} from '../../tabs/page-tab/page-tab.component';
import {TabsRoutingModule} from './tabs-routing.module';
import {DropDownModule} from '../drop-down/drop-down.module';



@NgModule({
  declarations: [
    TabsComponent,
    PageTabComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    DropDownModule
  ],
  exports: [TabsComponent]
})
export class TabsModule { }
