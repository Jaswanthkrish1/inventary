import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [RouterModule,CoreModule],
  exports: [LayoutComponent ],
})
export class LayoutModule {
  
}
