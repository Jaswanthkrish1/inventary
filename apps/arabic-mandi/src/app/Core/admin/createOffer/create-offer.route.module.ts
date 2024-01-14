import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../admin.guard';
import { CreateOfferComponent } from './pages/create-offer.component';
import { OfferViewComponent } from './pages/offer-view.component';
import { UpdateOfferDailogComponent } from './components/update-offer.component';
const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AdminGuard],
    component: CreateOfferComponent,
  },

  {
    path: 'View_Offers',
    component: OfferViewComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'update_item',
    component: UpdateOfferDailogComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class OfferRoutingModule {}
