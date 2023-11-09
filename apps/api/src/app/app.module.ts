import { Module } from '@nestjs/common';

import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { typeormOptions } from '../config/typeorm.config';
import { CoreModule } from './core/core.module';

import { GraphQLModule } from '@nestjs/graphql';
import { graphqlOptions } from '../config/graphql.config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from '../config/config';
@Module({
  imports: [
    
    CoreModule,
    ConfigModule.forRoot(config),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) =>
        config.get<TypeOrmModuleOptions>('typeorm'),
    }),

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) =>
        config.get<unknown>('graphql'),
    }),
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
