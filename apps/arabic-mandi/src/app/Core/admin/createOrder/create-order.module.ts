import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderComponent } from './pages/create-order.component';
import { OrderRoutingModule } from './create-route.module';
import { UpdateOrderComponent } from './pages/update-order.component';
import { CoreModule } from '../../core.module';
import { MaterialModule } from '../../material.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { UpdateItemComponentDialog } from './components/update-order-dailog.component';

@NgModule({
  declarations: [
    CreateOrderComponent,
    UpdateOrderComponent,
    UpdateItemComponentDialog
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    CoreModule,
    MatSnackBarModule,
    MatStepperModule,
  ],
  exports: [],
  providers: [],
})
export class CreateOrderModule {}
