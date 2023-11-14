import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-matirial.module';
import { NoScrollDirective } from './no-scroll/no-scroll.directive';

const MODULES = [CommonModule, RouterModule, FormsModule,ReactiveFormsModule, MaterialModule];
const COMPONENT = [];
@NgModule({
  declarations: [NoScrollDirective],
  imports: [...MODULES],
  exports: [...MODULES, NoScrollDirective],
})
export class CoreModule {}
