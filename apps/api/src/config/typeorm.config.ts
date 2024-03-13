import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

import path = require('path');
import { Authenticate } from '../app/core/authentication/authenticate.entity';
import { FoodType } from '../app/core/foodcategory/foodType/foodtype.entity';
import { FoodCategory } from '../app/core/foodcategory/foodcategory.entity';
import { FoodSize } from '../app/core/foodcategory/foodsize/foodsize.entity';
import { Offer } from '../app/core/item/comboitem/combo.entity';
import { ItemEntity } from '../app/core/item/item.entity';
import { User } from '../app/core/user/user.entity';

// export const typeormOptions: TypeOrmModuleOptions = {
//   name: 'default',
//   type: 'mysql',
//   // entities: [__dirname+'/**/*.entity{.ts,.js}'],
//   host: process.env.DATABASE_HOST ?? 'localhost',
//   port: parseInt(process.env.DATABASE_PORT, 10) ?? 3306,
//   username: process.env.DATABASE_USER ?? 'root',
//   password: process.env.DATABASE_PASS ?? 'jaswanth',
//   database: process.env.DATABASE_DB ?? 'Inventery',
//   autoLoadEntities: true,
//   logging: false,
//   synchronize: true
// };
// for deployement
export const typeormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST || 'inventery-db-jaswanth-db90.a.aivencloud.com',
  port: parseInt(process.env.DATABASE_PORT, 10) || 18378,
  username: process.env.DATABASE_USER || 'avnadmin',
  password: process.env.DATABASE_PASS || 'AVNS_LcWSTDLvOz8bld53FfY',
  database: process.env.DATABASE_DB || 'defaultdb',
  entities: [ 
    User,
    Authenticate,
    ItemEntity,
    FoodCategory,
    FoodType,
    FoodSize,
    Offer
  ],
  synchronize: true
};
// database config for local connection
// export const typeormOptions: TypeOrmModuleOptions = {
//   // name: 'default',
//   type: 'mysql',
//   host: 'inventery-db-jaswanth-db90.a.aivencloud.com', // Provide the hostname directly
//   port: 18378, // Specify the port
//   username: 'avnadmin', // Provide the username directly
//   password: 'AVNS_LcWSTDLvOz8bld53FfY', // Provide the password directly
//   database: 'defaultdb', // Specify the database name
//   entities: [ 
//     User,
//     Authenticate,
//     ItemEntity,
//     FoodCategory,
//     FoodType,
//     FoodSize,
//     Offer],
//   // autoLoadEntities: true,
//   synchronize: true,
//   // logging: false,
// };

export const typeormConfig = registerAs('typeorm', () => typeormOptions);


