import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "./admin.guard";

const appRoutes: Routes = [
    {
      path: 'dashboard',
      canActivate: [AdminGuard],
      loadChildren: () =>
        import('./dashboard/dashboard.module').then(
          (m) => m.DashBoardModule
        ),
    },
    {
      path: 'item',
      canActivate: [AdminGuard],
      loadChildren: () =>
        import('./createOrder/create-order.module').then(
          (m) => m.CreateOrderModule
        ),
    },
    {
      path: 'offer',
      canActivate: [AdminGuard],
      loadChildren: () =>
      import('./createOffer/create-offer.module').then(
        (m) => m.CreateOfferModule
      ),
    }

]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
  })
  export class AdminRoutingModule {}