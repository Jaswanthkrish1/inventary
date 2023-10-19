import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboComponent } from '../combo/combo.component';
import { CategoriesComponent } from './categories.component';
import { CoreModule } from '../../core.module';


@NgModule({
  declarations: [ComboComponent,CategoriesComponent],
  imports: [
    CommonModule,CoreModule
  ]
})
export class CategoriesModule { }
