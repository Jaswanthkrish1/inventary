import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core.module';
import { MainLayout } from './flex-layout.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../angular-matirial.module';

@NgModule({
  declarations: [MainLayout],
  imports: [CommonModule,RouterModule,CoreModule ,MaterialModule],
  exports: [ CoreModule, MaterialModule ],
})
export class LayoutModule {
  
}
