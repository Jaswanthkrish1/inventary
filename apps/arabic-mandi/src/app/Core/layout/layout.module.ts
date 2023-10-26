import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core.module';
import { LayoutComponent } from './layout.component';
import { LocationComponent } from './pages/location.component';

@NgModule({
  declarations: [LayoutComponent,LocationComponent],
  imports: [RouterModule,CoreModule],
  exports: [LayoutComponent ],
})
export class LayoutModule {
  
}
