import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './pages/create-order.component';
import { AdminGuard } from '../admin.guard';
import { UpdateOrderComponent } from './pages/update-order.component';
import { ViewItemComponent } from './views/view-item.component';

const itemRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AdminGuard],
    component: ViewItemComponent,
  },
  {
    path: 'create_item',
    component: CreateOrderComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'update_item',
    component: UpdateOrderComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(itemRoutes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
