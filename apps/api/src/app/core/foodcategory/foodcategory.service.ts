import { BadRequestException, Injectable } from '@nestjs/common';
import { Controller, Get, Post, Put, Delete, Body, Param,UnauthorizedException } from '@nestjs/common';

import { InjectRepository ,} from '@nestjs/typeorm';
import { DeleteResult, Equal, FindOneOptions, Repository, } from 'typeorm';

import { FoodCategory } from './foodcategory.entity';
@Injectable()
export class FoodCategoryService {
  constructor(
    @InjectRepository(FoodCategory)
    private userRepository: Repository<FoodCategory>,
    
  ) {}

  async getAllUsers(): Promise<FoodCategory[]> {
    return this.userRepository.find();
  }

  async createUser(): Promise<FoodCategory> {
    const user = new FoodCategory();
   user.name='staters'
    return this.userRepository.save(user);
  }

  async getUserById(id: number): Promise<FoodCategory> {
    const options: FindOneOptions<FoodCategory> = {
        where: { id: Equal(id) },
      };
    return this.userRepository.findOne(options);
  }

  async updateUser(id: number, email: string, name: string): Promise<FoodCategory> {
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