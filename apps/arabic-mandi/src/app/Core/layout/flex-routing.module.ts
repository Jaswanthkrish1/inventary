import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FlexLayoutComponent } from "./flex-layout.component";

const routes: Routes = [
    { path: '', component: FlexLayoutComponent},
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class FlexRoutingModule {}