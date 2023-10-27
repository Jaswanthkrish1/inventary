import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './angular-matirial.module';

const MODULES = [CommonModule, RouterModule, FormsModule, MaterialModule];
const COMPONENT = [];
@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class CoreModule {}
