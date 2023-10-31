import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

import path = require('path');

export const typeormOptions: TypeOrmModuleOptions = {
  name: 'default',
  type: 'mysql',
  // entities: [__dirname+'/**/*.entity{.ts,.js}'],
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) ?? 3306,
  username: process.env.DATABASE_USER ?? 'root',
  password: process.env.DATABASE_PASS ?? 'J@swanth1',
  database: process.env.DATABASE_DB ?? 'inventary',
  autoLoadEntities: true,
  logging: true,
  synchronize: true
};

export const typeormConfig = registerAs('typeorm', () => typeormOptions);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ormConfig: any = {
  ...typeormOptions,
  autoLoadEntities: undefined,
  entities: [path.join(__dirname, '..', 'app/**/*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '..', 'migrations/**/*{.ts,.js}')],
  subscribers: [path.join(__dirname, '..', 'app/**/*.subscriber{.ts,.js}')],
  cli: {
    entitiesDir: path.join(__dirname, '..', 'entities'),
    migrationsDir: path.join(__dirname, '..', 'migrations'),
    subscribersDir: path.join(__dirname, '..', 'subscribers'),
  },
};

// Required for migrations
export default ormConfig;
