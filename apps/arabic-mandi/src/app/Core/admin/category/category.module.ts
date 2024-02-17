import { NgModule } from "@angular/core";
import { UpdateCategoryComponentDialog } from "./components/update-category-dialog.component";
import { CreateCategoryComponentDialog } from "./components/create-category-dialog.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../material.module";
import { AdminCategoryRoutingModule } from "./category-route.module";

@NgModule({
    declarations: [
      ],
      imports: [
        CommonModule,
        MaterialModule,
        AdminCategoryRoutingModule
      ],
      exports: [],
      providers: [],
})
export class AdminCategoryModule {
    constructor(){}

}