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
  password: process.env.DATABASE_PASS ?? 'jaswanth',
  database: process.env.DATABASE_DB ?? 'Inventery',
  autoLoadEntities: true,
  logging: false,
  synchronize: true
};

export const typeormConfig = registerAs('typeorm', () => typeormOptions);


