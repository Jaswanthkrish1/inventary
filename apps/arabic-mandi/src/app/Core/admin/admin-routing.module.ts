import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "./admin.guard";

const adminRoutes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashBoardModule
          ),
      },
    ]
  }

]

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule],
  })
  export class AdminRoutingModule {}
