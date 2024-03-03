import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../admin.guard';
import { CategoryViewComponent } from './views/view-category.component';
import { CreateCategoryComponentDialog } from './components/create-category-dialog.component';
import { UpdateCategoryComponentDialog } from './components/update-category-dialog.component';


const categoryRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AdminGuard],
    component: CategoryViewComponent,
  },
  {
    path: 'create_category',
    component: CreateCategoryComponentDialog,
    canActivate: [AdminGuard],
  },
  {
    path: 'update_category',
    component: UpdateCategoryComponentDialog,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(categoryRoutes)],
  exports: [RouterModule],
})
export class AdminCategoryRoutingModule {}
