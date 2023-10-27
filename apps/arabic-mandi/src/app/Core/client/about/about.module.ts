import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "../../core.module";
import { AboutComponent } from "./about.component";
import { AboutRouter } from "./about.router.module";

@NgModule({
    declarations: [  AboutComponent ],
    imports: [ CoreModule, AboutRouter ],
    exports: [ ],
})
export class AboutModule{

}