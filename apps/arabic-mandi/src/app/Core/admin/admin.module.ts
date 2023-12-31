import { NgModule } from '@angular/core';
import { CoreModule } from '../core.module';
import { CreateOrderModule } from './createOrder/create-order.module';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material.module';
import { Apollo } from 'apollo-angular';
import { dashboardRoutingModule } from './dashboard/dashboard-route.module';

@NgModule({
  imports: [CoreModule,MaterialModule, CreateOrderModule, AdminRoutingModule, dashboardRoutingModule],
  declarations: [],
  exports: [ ],
})
export class AdminModule {}
