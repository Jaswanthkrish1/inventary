// graphql.config.ts

import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { environment } from '../environment/environment';
import { registerAs } from '@nestjs/config';
import { typeormOptions } from './typeorm.config';
import { GraphQLObjectTypeConfig } from 'graphql';

export const graphqlOptions: unknown = {
  path: 'api',
  debug: true,
  playground: true,
  installSubscriptionHandlers: true,
  allowBatchedHttpRequests: true,
  autoSchemaFile: environment.processName.search(/primary/) !== -1 ? join(process.cwd(), 'schema.gql') : false,
  sortSchema: true,
  driver: ApolloDriver,
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
    credentials: true,
  },
  resolvers: {},
};
export const graphqlConfig = registerAs('graphql', () => graphqlOptions);

