import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodType } from './foodtype.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ FoodType])]
})
export class FoodCategoryModule {}