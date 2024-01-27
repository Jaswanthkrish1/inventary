import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

import path = require('path');

export const typeormOptions: TypeOrmModuleOptions = {
  name: 'default',
  type: 'mysql',
  host: process.env.MYSQLHOST ?? 'localhost',
  port: parseInt(process.env.MYSQLPORT, 10) ?? 3306,
  username: process.env.MYSQLUSER ?? 'root',
  password: process.env.MYSQLPASSWORD ?? 'jaswanth', // Change to your default password
  database: process.env.MYSQLDATABASE ?? 'Inventery',
  autoLoadEntities: false,
  logging: false,
  synchronize: false,
};

export const typeormConfig = registerAs('typeorm', () => typeormOptions);


