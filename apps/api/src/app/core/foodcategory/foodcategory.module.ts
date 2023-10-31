import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodCategory } from './foodcategory.entity';
import { FoodCategoryController } from './foodcategory.controller';
import { FoodCategoryService } from './foodcategory.service';


@Module({
  imports:[TypeOrmModule.forFeature([ FoodCategory ])],
  controllers: [FoodCategoryController],
  providers: [FoodCategoryService],
  exports:[FoodCategoryService]
})
export class FoodCategoryModule {}