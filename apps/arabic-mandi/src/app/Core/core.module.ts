import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { CategoriesModule } from './pages/categories/categories.module';

@NgModule({
  declarations: [ ],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule],
})
export class CoreModule {}
