import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity';
import { ItemController } from './item.controller';

@Module({
  imports:[TypeOrmModule.forFeature([ ItemEntity, ])],
  controllers: [],
  providers: [],
  exports:[]
})
export class ItemModule {}