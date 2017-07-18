import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule,
  MdCheckboxModule, MdInputModule, MdToolbarModule,
  MdProgressBarModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MdButtonModule, MdCheckboxModule,
    MdInputModule, MdToolbarModule,
    MdCardModule,
    MdProgressBarModule
  ],
  exports: [
    MdButtonModule, MdCheckboxModule,
    MdInputModule, MdToolbarModule,
    MdCardModule, MdProgressBarModule
  ],

})
export class MaterialsModule { }
