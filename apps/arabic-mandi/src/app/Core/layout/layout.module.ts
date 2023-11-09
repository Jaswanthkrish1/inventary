import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core.module';
import { MainLayout } from './flex-layout.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../angular-matirial.module';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [MainLayout],
  imports: [CommonModule,RouterModule,CoreModule ,MaterialModule , MatIconModule, MatMenuModule],
  exports: [ CoreModule, MaterialModule ],
})
export class LayoutModule {
  
}
