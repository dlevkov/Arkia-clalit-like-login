import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule,
  MdCheckboxModule, MdInputModule, MdToolbarModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MdButtonModule, MdCheckboxModule,
    MdInputModule, MdToolbarModule,
    MdCardModule
  ],
  exports: [
    MdButtonModule, MdCheckboxModule,
    MdInputModule, MdToolbarModule,
    MdCardModule
  ],

})
export class MaterialsModule { }
