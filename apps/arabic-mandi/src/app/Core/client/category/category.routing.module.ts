import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category.component';
import { FoodComponent } from './views/foodview.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [],
  },
  {
     path: 'food/:category',
     data: { breadcrumb: 'food' },
     component: FoodComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
