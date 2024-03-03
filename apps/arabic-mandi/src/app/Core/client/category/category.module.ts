import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './pages/category.component';
import { CoreModule } from '../../core.module';
import { CategoryRoutingModule } from './category.routing.module';
import { FoodComponent } from './views/foodview.component';
import { FoodDetails } from './components/food-details.component';
import { MaterialModule } from '../../material.module';
import { CategoryService } from './category.service';
import { UpdateCategoryComponentDialog } from '../../admin/category/components/update-category-dialog.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CategoryComponent, FoodComponent, FoodDetails,UpdateCategoryComponentDialog],
  imports: [CommonModule, CoreModule, CategoryRoutingModule, MaterialModule, CarouselComponent, CarouselModule,FlexLayoutModule],

  exports: [CategoryComponent,FoodComponent, FoodDetails, ],
  providers: [CategoryService]
})
export class CategoryModule {}
