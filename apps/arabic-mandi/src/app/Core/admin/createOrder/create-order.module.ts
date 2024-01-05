import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderComponent } from './pages/create-order.component';
import { OrderRoutingModule } from './create-route.module';
import { ViewOrderComponent } from './pages/view-order.component';
import { UpdateOrderComponent } from './pages/update-order.component';
import { CoreModule } from '../../core.module';
import { MaterialModule } from '../../material.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { CreateCategoryComponentDialog } from './components/create-category-dialog.component';
import { CreateOrderService } from './create-order.service';
import { UpdateItemComponentDialog } from './components/update-order-dailog.component';

@NgModule({
  declarations: [
    CreateOrderComponent,
    ViewOrderComponent,
    UpdateOrderComponent,
    CreateCategoryComponentDialog,
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
  exports: [MatSnackBarModule],
  providers: [CreateOrderService],
})
export class CreateOrderModule {}
