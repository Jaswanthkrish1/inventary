import { BadRequestException, Injectable } from '@nestjs/common';
import { Controller, Get, Post, Put, Delete, Body, Param,UnauthorizedException } from '@nestjs/common';

import { InjectRepository ,} from '@nestjs/typeorm';
import { DeleteResult, Equal, FindOneOptions, Repository, } from 'typeorm';

import { ItemEntity } from './item.entity';
import { FoodCategory } from '../foodcategory/foodcategory.entity';
import { User } from '../user/user.entity';
@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private userRepository: Repository<ItemEntity>,
   
  ) {}

  async getAllUsers(): Promise<ItemEntity[]> {
    return this.userRepository.find();
  }



  async createUser(img:any): Promise<ItemEntity> {
   debugger; 
    const item = new ItemEntity();
    item.image_data= img;
    item.name = 'dragonchiken'; // Set the name
    item.category = new FoodCategory(); // Create and set a new category
    item.category.name = 'starters'; // Set the category name
    item.createdby = new User(); // Create and set a new user
    item.createdby.id = 1; // Set the user ID
    
   return await this.userRepository.save(item)
  
  }

  async getUserById(id: number): Promise<ItemEntity> {
    const options: FindOneOptions<ItemEntity> = {
        where: { id: Equal(id) },
      };
    return this.userRepository.findOne(options);
  }

  async updateUser(id: number, email: string, name: string): Promise<ItemEntity> {
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