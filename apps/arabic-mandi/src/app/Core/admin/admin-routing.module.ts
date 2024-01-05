import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashBoardComponent } from "./dashboard/dashboard.component";

const appRoutes: Routes = [
    {
      path: 'add_item',
      loadChildren: () =>
        import('./createOrder/create-order.module').then(
          (m) => m.CreateOrderModule
        ),
    },
    {
      path: 'dashboard',
      loadChildren: () =>
        import('./dashboard/dashboard-route.module').then(
          (m) => m.dashboardRoutingModule
        ),
    },

]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
  })
  export class AdminRoutingModule {}