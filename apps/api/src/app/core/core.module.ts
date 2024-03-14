import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ItemModule } from './item/item.module';
import { FoodCategoryModule } from './foodcategory/foodcategory.module';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { User } from './user/user.entity';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { CreateUserInput, UpdateUserInput } from './user/user.input';
import { AuthController } from './authentication/authenticate.controller';
import { Authenticate } from './authentication/authenticate.entity';
import { AuthenticateService } from './authentication/authenticate.service';
import { ItemEntity } from './item/item.entity';
import { FoodCategory } from './foodcategory/foodcategory.entity';
import { CreateItemInput, UpdateItemInput } from './item/item.input';
import {
  CreateFoodCategoryInput,
  UpdateFoodCategoryInput,
} from './foodcategory/foodcategory.input';
import { Offer } from './item/comboitem/combo.entity';
import { CreateOfferInput, UpdateOfferInput } from './item/comboitem/combo.input';
import { FoodType } from './foodcategory/foodType/foodtype.entity';
import { CreateFoodTypeInput, UpdateFoodTypeInput } from './foodcategory/foodType/foodtype.input';
import { FoodSize } from './foodcategory/foodsize/foodsize.entity';
import { CreateFoodSizeInput, UpdateFoodSizeInput } from './foodcategory/foodsize/foodsize.input';
//test
@Module({
  imports: [
    UserModule,
    ItemModule,
    FoodCategoryModule,

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) =>
        config.get<JwtModuleOptions>('jwt'),
    }),

    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([
          User,
          Authenticate,
          ItemEntity,
          FoodCategory,
          FoodType,
          FoodSize,
          Offer
        ]),
      ],
      resolvers: [
        {
          DTOClass: User,
          EntityClass: User,
          CreateDTOClass: CreateUserInput,
          UpdateDTOClass: UpdateUserInput,
          // enableTotalCount: true,
          pagingStrategy: PagingStrategies.NONE,
          create: { many: { disabled: true }, one: { disabled: false } },
          update: { many: { disabled: true }, one: { disabled: false } },
          delete: { many: { disabled: true }, one: { disabled: true } },
          read: { many: { disabled: false }, one: { disabled: false } },
        },
        {
          DTOClass: ItemEntity,
          EntityClass: ItemEntity,
          CreateDTOClass: CreateItemInput,
          UpdateDTOClass: UpdateItemInput,
          // enableTotalCount: true,
          pagingStrategy: PagingStrategies.NONE,
          create: { many: { disabled: false }, one: { disabled: false } },
          update: { many: { disabled: false }, one: { disabled: false } },
          delete: { many: { disabled: false }, one: { disabled: false } },
          read: { many: { disabled: false }, one: { disabled: false } },
        },
        {
          DTOClass: FoodCategory,
          EntityClass: FoodCategory,
          CreateDTOClass: CreateFoodCategoryInput,
          UpdateDTOClass: UpdateFoodCategoryInput,
          // enableTotalCount: true,
          pagingStrategy: PagingStrategies.NONE,
          create: { many: { disabled: true }, one: { disabled: false } },
          update: { many: { disabled: true }, one: { disabled: false } },
          delete: { many: { disabled: true }, one: { disabled: false } },
          read: { many: { disabled: false }, one: { disabled: false } },
        },
        {
          DTOClass: FoodSize,
          EntityClass: FoodSize,
          CreateDTOClass: CreateFoodSizeInput,
          UpdateDTOClass: UpdateFoodSizeInput,
          // enableTotalCount: true,
          pagingStrategy: PagingStrategies.NONE,
          create: { many: { disabled: true }, one: { disabled: false } },
          update: { many: { disabled: true }, one: { disabled: false } },
          delete: { many: { disabled: true }, one: { disabled: true } },
          read: { many: { disabled: false }, one: { disabled: false } },
        },
        {
          DTOClass: FoodType,
          EntityClass: FoodType,
          CreateDTOClass: CreateFoodTypeInput,
          UpdateDTOClass: UpdateFoodTypeInput,
          // enableTotalCount: true,
          pagingStrategy: PagingStrategies.NONE,
          create: { many: { disabled: true }, one: { disabled: false } },
          update: { many: { disabled: true }, one: { disabled: false } },
          delete: { many: { disabled: true }, one: { disabled: false } },
          read: { many: { disabled: false }, one: { disabled: false } },
        },
        {
          DTOClass: Offer,
          EntityClass: Offer,
          CreateDTOClass: CreateOfferInput,
          UpdateDTOClass: UpdateOfferInput,
          // enableTotalCount: true,
          pagingStrategy: PagingStrategies.NONE,
          create: { many: { disabled: false }, one: { disabled: false } },
          update: { many: { disabled: false }, one: { disabled: false } },
          delete: { many: { disabled: false }, one: { disabled: false } },
          read: { many: { disabled: false }, one: { disabled: false } },
        },
      ],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthenticateService],
})
export class CoreModule {}
