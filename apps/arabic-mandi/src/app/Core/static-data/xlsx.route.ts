import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { XlsxComponent } from "./xlsx.component";

const routes: Routes = [
    { path: '', component: XlsxComponent },
    // { path: 'auth/callback', component: MsalRedirectComponent }
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class XlsxRoutingModule {}
