import { Controller, Get, Post, Put, Delete, Body, Param,UnauthorizedException } from '@nestjs/common';
import { FoodCategoryService } from './foodcategory.service';


@Controller('cetegory')
export class FoodCategoryController {
  constructor(private readonly userService: FoodCategoryService,
   
    ) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser() {
    return this.userService.createUser();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body('email') email: string, @Body('name') name: string) {
    return this.userService.updateUser(id, email, name);
  }

  
  @Delete(':id')
async deleteUser(@Param('id') id: number) {
   
}

}