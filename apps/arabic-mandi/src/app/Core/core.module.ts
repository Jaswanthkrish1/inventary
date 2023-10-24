import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { FormsModule } from '@angular/forms';

const MODULES = [CommonModule, RouterModule , FormsModule];
const COMPONENT = []
@NgModule({
  declarations: [ ],
  imports: [...MODULES,],
  exports: [...MODULES],
})
export class CoreModule {}
