import { Query, Resolver } from '@nestjs/graphql';

import { ItemService } from './item.service';
import { ItemEntity } from './item.entity';

@Resolver()
export class ItemResolver {
  constructor(private readonly itemServ: ItemService) {}

  @Query(() => [ItemEntity])
  getItems() {
    return this.itemServ.getAllItems();
  }
}
