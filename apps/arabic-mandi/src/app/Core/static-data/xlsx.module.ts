import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core.module';
import { XlsxComponent } from './xlsx.component';
import { XlsxRoutingModule } from './xlsx.route';

@NgModule({
  declarations: [
  XlsxComponent
  ],
  imports: [
    CommonModule,CoreModule,XlsxRoutingModule
  ]
})
export class xlsxModule { }
