import { BadRequestException, Injectable } from '@nestjs/common';
import { Controller, Get, Post, Put, Delete, Body, Param,UnauthorizedException } from '@nestjs/common';

import { InjectRepository ,} from '@nestjs/typeorm';
import { DeleteResult, Equal, FindOneOptions, Repository, } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
   
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(): Promise<User> {
    const user = new User();
    user.role='main-Admin'
    return this.userRepository.save(user);
  }

  async getUserById(id: number): Promise<User> {
    const options: FindOneOptions<User> = {
        where: { id: Equal(id) },
      };
    return this.userRepository.findOne(options);
  }

  async updateUser(id: number, email: string, name: string): Promise<User> {
    const user = await this.userRepository.findOne({
        where: { id: Equal(id) },
      });
 
    return this.userRepository.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    // const idAvailable = await this.taskRepository.findOne({
    //   where: { assignedToUser: Equal(id) },
    // });
       this.userRepository.delete(id)
    
  }
  
}