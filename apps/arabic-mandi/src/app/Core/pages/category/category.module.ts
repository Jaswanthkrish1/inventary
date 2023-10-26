import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComboComponent } from './components/combo.component';
import { CategoryComponent } from './category.component';
import { CoreModule } from '../../core.module';
import { CategoryRoutingModule } from './category.routing.module';
import { FoodComponent } from './components/foodview.component';
import { FoodDetails } from './pages/food-details.component';

@NgModule({
  declarations: [FoodComboComponent, CategoryComponent, FoodComponent,FoodDetails],
  imports: [CommonModule, CoreModule, CategoryRoutingModule],

  exports: [CategoryComponent, ],
})
export class CategoryModule {}
