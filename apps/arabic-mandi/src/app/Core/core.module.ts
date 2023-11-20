import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NoScrollDirective } from './no-scroll/no-scroll.directive';
import { ApolloModule } from 'apollo-angular';
import { MatTooltipModule } from '@angular/material/tooltip';

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  ApolloModule,
  MatTooltipModule,
];
const COMPONENT = [];
@NgModule({
  declarations: [NoScrollDirective],
  imports: [...MODULES],
  exports: [...MODULES, NoScrollDirective],
})
export class CoreModule {}
