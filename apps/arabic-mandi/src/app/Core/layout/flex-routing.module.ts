import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FlexLayoutComponent } from "./flex-layout.component";

const routes: Routes = [
    { path: '', component: FlexLayoutComponent},
    // { path: 'auth/callback', component: MsalRedirectComponent }
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class FlexRoutingModule {}