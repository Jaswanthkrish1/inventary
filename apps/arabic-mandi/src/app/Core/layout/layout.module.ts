import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FlexLayoutComponent } from './flex-layout.component';
import { FlexRoutingModule } from './flex-routing.module';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FlexLayoutComponent],
  imports: [RouterModule, MaterialModule, FlexRoutingModule, CommonModule],
  exports: [FlexLayoutComponent,MaterialModule],
})
export class LayoutFlexModule {}
