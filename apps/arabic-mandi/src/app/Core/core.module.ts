import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';

const MODULES = [CommonModule, RouterModule];
const COMPONENT = []
@NgModule({
  declarations: [ ],
  imports: [...MODULES,],
  exports: [...MODULES],
})
export class CoreModule {}
