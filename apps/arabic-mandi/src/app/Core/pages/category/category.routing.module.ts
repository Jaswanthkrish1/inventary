import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { FoodComponent } from './components/foodview.component';
import { FoodComboComponent } from './components/combo.component';
import { FoodDetails } from './pages/food-details.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [],
  },
  { path: 'food/:category', component: FoodComponent },
  { path: 'combo', component: FoodComboComponent },


  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
