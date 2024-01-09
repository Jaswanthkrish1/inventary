// graphql.config.ts

import { join } from 'path';
import { environment } from '../environment/environment';
import { registerAs } from '@nestjs/config';

export const graphqlOptions: unknown = {
  path: 'api/graphql',
  debug: true,
  playground: true,
  installSubscriptionHandlers: true,
  allowBatchedHttpRequests: true,
  autoSchemaFile: environment.processName.search(/primary/) !== -1 ? join(process.cwd(), 'schema.gql') : false,
  sortSchema: true,
  // driver: ApolloDriver,
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
    credentials: true,
  },
  resolvers: {},

};
export const graphqlConfig = registerAs('graphql', () => graphqlOptions);

