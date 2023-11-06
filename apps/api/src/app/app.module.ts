import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormOptions } from '../config/typeorm.config';
import { CoreModule } from './core/core.module';

import { GraphQLModule } from '@nestjs/graphql';
import { graphqlOptions } from '../config/graphql.config';
@Module({
  imports: [
    CoreModule,
    TypeOrmModule.forRoot(typeormOptions),

    GraphQLModule.forRoot(graphqlOptions),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
