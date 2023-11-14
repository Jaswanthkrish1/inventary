import { NgModule } from '@angular/core';
import { CoreModule } from '../core.module';
import { CreateOrderModule } from './createOrder/create-order.module';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../../angular-matirial.module';

@NgModule({
  imports: [CoreModule,MaterialModule, CreateOrderModule, AdminRoutingModule],
  declarations: [],
  exports: [ ],
})
export class AdminModule {}
