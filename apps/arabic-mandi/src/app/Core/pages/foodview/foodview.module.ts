import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodviewComponent } from './foodview.component';
import { CoreModule } from '../../core.module';



@NgModule({
  declarations: [FoodviewComponent],
  imports: [
    CommonModule
  ]
})
export class FoodviewModule { }
