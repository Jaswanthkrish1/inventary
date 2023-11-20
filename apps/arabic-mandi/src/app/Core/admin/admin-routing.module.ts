import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    {
      path: 'add_item',
      loadChildren: () =>
        import('./createOrder/create-order.module').then(
          (m) => m.CreateOrderModule
        ),
    },
]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
  })
  export class AdminRoutingModule {}