import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashBoardComponent } from "./dashboard/dashboard.component";

const appRoutes: Routes = [
    {
      path: 'dashboard',
      loadChildren: () =>
        import('./dashboard/dashboard.module').then(
          (m) => m.DashBoardModule
        ),
    },
]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
  })
  export class AdminRoutingModule {}