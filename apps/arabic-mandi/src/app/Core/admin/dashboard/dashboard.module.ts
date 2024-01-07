import { NgModule } from '@angular/core';
import { CoreModule } from '../../core.module';
import { MaterialModule } from '../../material.module';
import { dashboardRoutingModule } from './dashboard-route.module';
import { DashBoardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { CreateOrderModule } from '../createOrder/create-order.module';

@NgModule({
  imports: [CommonModule, CoreModule, MaterialModule, dashboardRoutingModule, DashBoardComponent],
  declarations: [DashBoardComponent],
  exports: [],
})
export class DashBoardModule { }
