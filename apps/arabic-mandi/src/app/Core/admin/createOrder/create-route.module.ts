import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './pages/create-order.component';
import { AdminGuard } from '../admin.guard';
import { ViewOrderComponent } from './pages/view-order.component';
import { UpdateOrderComponent } from './pages/update-order.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AdminGuard],

    component: ViewOrderComponent,
  },

  {
    path: 'create_item',
    component: CreateOrderComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'update_item',
    component: UpdateOrderComponent,
    canActivate: [AdminGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
