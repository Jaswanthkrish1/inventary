import { NgModule } from '@angular/core';
import { CoreModule } from '../core.module';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [CoreModule,MaterialModule, AdminRoutingModule],
})
export class AdminModule {}
