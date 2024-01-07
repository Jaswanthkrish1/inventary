import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../admin.guard';
import { CreateOfferComponent } from './pages/create-offer.component';
const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AdminGuard],
    component: CreateOfferComponent,
  },

  // {
  //   path: 'create_item',
  //   // component: CreateOrderComponent,
  //   canActivate: [AdminGuard],
  // },
  // {
  //   path: 'update_item',
  //   // component: UpdateOrderComponent,
  //   canActivate: [AdminGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class OfferRoutingModule {}
