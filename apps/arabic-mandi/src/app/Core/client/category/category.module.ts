import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CoreModule } from '../../core.module';
import { CategoryRoutingModule } from './category.routing.module';
import { FoodComponent } from './components/foodview.component';
import { FoodDetails } from '././pages/food-details.component';
import { SlideComponent } from './pages/slider/slide.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [CategoryComponent, FoodComponent, FoodDetails, SlideComponent],
  imports: [CommonModule, CoreModule, CategoryRoutingModule, MaterialModule,],

  exports: [CategoryComponent,FoodComponent, FoodDetails, SlideComponent],
})
export class CategoryModule {}
