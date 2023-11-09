import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Authenticate } from '../authentication/authenticate.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ User,Authenticate ])],
  controllers: [],
  providers: [],
  exports:[]
})
export class UserModule {}