import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity';
import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';

@Module({
  imports:[TypeOrmModule.forFeature([ ItemEntity, ])],
  controllers: [],
  providers: [ItemResolver,ItemService],
  exports:[]
})
export class ItemModule {}