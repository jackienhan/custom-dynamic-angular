import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropDownComponent} from '../../drop-down/drop-down.component';
import {DropDownRoutingModule} from './drop-down-routing.module';
import {CustomSelectComponent} from '../../drop-down/custom-select/custom-select.component';
import {CustomSelectOptionComponent} from '../../drop-down/custom-select-option/custom-select-option.component';
import {CustomDropdownComponent} from '../../drop-down/custom-dropdown/custom-dropdown.component';




@NgModule({
  declarations: [
    DropDownComponent,
    CustomDropdownComponent,
    CustomSelectComponent,
    CustomSelectOptionComponent
  ],
  imports: [
    CommonModule,
    DropDownRoutingModule,
  ],
  exports: [CustomSelectOptionComponent]
})
export class DropDownModule { }
