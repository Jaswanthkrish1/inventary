import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ItemModule } from './item/item.module';
import { FoodCategoryModule } from './foodcategory/foodcategory.module';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { User } from './user/user.entity';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CreateUserInput, UpdateUserInput } from './user/user.input';

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
      imports: [NestjsQueryTypeOrmModule.forFeature([User])],
      resolvers: [
        {
           DTOClass: User, 
           EntityClass: User,
           CreateDTOClass: CreateUserInput,
           UpdateDTOClass: UpdateUserInput, 
           enableTotalCount: true,
           create: { many: { disabled: false }, one: { disabled: false } },
           update: { many: { disabled: false }, one: { disabled: false } },
           delete: { many: { disabled: false }, one: { disabled: false } },
           read: { many: { disabled: false }, one: { disabled: false } },
        }
      ],
    }),
  ],
  controllers: [],
  providers: [],
})
export class CoreModule {}
