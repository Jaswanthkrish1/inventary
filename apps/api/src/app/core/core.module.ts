import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { ItemModule } from "./item/item.module";
import { FoodCategoryModule } from "./foodcategory/foodcategory.module";

@Module({
    imports: [ UserModule, ItemModule ,FoodCategoryModule],
    controllers: [],
    providers: [],
  })
  export class CoreModule {}