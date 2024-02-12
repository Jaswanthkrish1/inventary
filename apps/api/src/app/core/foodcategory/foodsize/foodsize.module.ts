import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodSize } from './foodsize.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ FoodSize])]
})
export class FoodCategoryModule {}