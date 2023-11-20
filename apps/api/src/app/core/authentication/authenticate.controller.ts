// auth.controller.ts
import { Controller, Post, Body, HttpStatus, Res, Get, Param } from '@nestjs/common';


import { AuthDTO, UserRegistrationDto } from './auth.dto';
import { AuthenticateService } from './authenticate.service';
import { get } from 'http';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthenticateService) {}

  @Post('login')
  async login(@Body() loginDTO: AuthDTO) {
    const { username, password } = loginDTO;
    const Secret = await this.authService.login(username, password);
    if (Secret) {
      return { Secret };
    } else {
      return null ;
    }
  }

  @Post('register')
  async registerUser(@Body() userRegistrationDto: UserRegistrationDto, @Res() response) {
    try {
      const { username, password, role } = userRegistrationDto;
      await this.authService.registerUser(username, password, role);
      return response.status(HttpStatus.CREATED).json({ message: 'User registered successfully' });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  @Post('validateToken')
  async validateLogin(@Body() token: any): Promise<boolean>{
   return await this.authService.isTokenValid(token.token)
  }
}

