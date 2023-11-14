import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";


const MODULES: any[] = [
    FlexLayoutModule
]
@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
    providers: []
  })
  export class FlexLayout {}
