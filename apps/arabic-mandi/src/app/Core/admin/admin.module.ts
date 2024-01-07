import { NgModule } from '@angular/core';
import { CoreModule } from '../core.module';
import { CreateOrderModule } from './createOrder/create-order.module';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material.module';
import { dashboardRoutingModule } from './dashboard/dashboard-route.module';
import { CreateOfferModule } from './createOffer/create-offer.module';

@NgModule({
  imports: [CoreModule,MaterialModule, AdminRoutingModule, dashboardRoutingModule],
  declarations: [],
  exports: [ ],
})
export class AdminModule {}
