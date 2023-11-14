import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderComponent } from './pages/create-order.component';
import { OrderRoutingModule } from './create-route.module';
import { ViewOrderComponent } from './pages/view-order.component';
import { UpdateOrderComponent } from './pages/update-order.component';
import { CoreModule } from '@angular/flex-layout';
import { MaterialModule } from '../../../angular-matirial.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [CreateOrderComponent, ViewOrderComponent, UpdateOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    CoreModule,
    MatSnackBarModule
  ]
  ,
  exports: [ MatSnackBarModule]
})
export class CreateOrderModule { }
