import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FlexLayoutComponent } from './flex-layout.component';
import { FlexRoutingModule } from './flex-routing.module';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { CopyRightsComponent } from '../copyrights/rights.component';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';
import { BreadcrumbsComponent } from './breadcrumb/breadcrumbs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from '../client/category/pages/carousel/carousel.component';


@NgModule({
  declarations: [FlexLayoutComponent, BreadcrumbsComponent],
  imports: [ReactiveFormsModule, RouterModule,
    MaterialModule, FlexLayoutModule, FlexRoutingModule, CommonModule, CopyRightsComponent, BreadcrumbModule, CarouselComponent],
  exports: [FlexLayoutComponent, MaterialModule, BreadcrumbModule],
  providers: [BreadcrumbService]
})
export class LayoutFlexModule { }
