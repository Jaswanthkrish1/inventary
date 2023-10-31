import { NgModule } from '@angular/core';
import { LocationComponent } from './location.component';
import { CoreModule } from '../../core.module';
import { LocationRoutingModule } from './location.routing';

@NgModule({
  imports: [CoreModule, LocationRoutingModule],
  declarations: [LocationComponent],
  exports: [],
})
export class locationModule {}
