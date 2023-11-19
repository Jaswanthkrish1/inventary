
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { createWriteStream } from 'fs';
import { ItemEntity } from './item.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import { join } from 'path';
@Controller('item')
export class ItemController {
  constructor(private readonly userService: ItemService) {}


  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post('image')
  @UseInterceptors(FileInterceptor('image'))
  async createItem(@UploadedFile() image, @Res() res: Response) {
    debugger
    const imageBuffer = Buffer.from(image.buffer);
    // const uploadDir = join(__dirname, 'uploads'); // Define the directory path
  
    // // Create the 'uploads' directory if it doesn't exist
    // if (!fs.existsSync(uploadDir)) {
    //   fs.mkdirSync(uploadDir , { recursive: true });
    // }
  
    // const imagePath = `${uploadDir}/${Date.now()}-${image.originalname}`;
    
    // const imageStream = createWriteStream(imagePath);
    // imageStream.write(image.buffer);
    // imageStream.end();
  
    // Create an item with the image path
    const newItem = await this.userService.createUser(imageBuffer)
  
    return newItem
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body('email') email: string,
    @Body('name') name: string
  ) {
    return this.userService.updateUser(id, email, name);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {}
}
