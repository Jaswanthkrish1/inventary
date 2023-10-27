import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { FoodComponent } from './components/foodview.component';
import { FoodComboComponent } from './components/combo.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [],
  },
  { path: 'food/:category', component: FoodComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
