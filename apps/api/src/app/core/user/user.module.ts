import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { BaseEntity } from 'typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ User , BaseEntity ])],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}