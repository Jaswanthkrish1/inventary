import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComboComponent } from './combo.component';
const routes: Routes = [
  {
    path: '',
    component: FoodComboComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComboRoutingModule {}
