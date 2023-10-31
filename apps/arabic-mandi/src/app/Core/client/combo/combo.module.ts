import { NgModule } from '@angular/core';
import { CoreModule } from '../../core.module';
import { FoodComboComponent } from './combo.component';
import { ComboRoutingModule } from './combo.routing.module';

@NgModule({
  declarations: [FoodComboComponent],
  imports: [CoreModule, ComboRoutingModule],
  exports: [FoodComboComponent],
})
export class ComboModule {}
