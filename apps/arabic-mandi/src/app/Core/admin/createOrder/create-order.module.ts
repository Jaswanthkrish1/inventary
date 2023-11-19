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
import { MatButtonModule } from '@angular/material/button';
import { DraftViewComponent } from './components/draft-view.component';
import { ApolloModule } from 'apollo-angular';
import { CreateOrderService } from './create-order.service';

@NgModule({
  declarations: [
    CreateOrderComponent,
    ViewOrderComponent,
    UpdateOrderComponent,
    DraftViewComponent,
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
