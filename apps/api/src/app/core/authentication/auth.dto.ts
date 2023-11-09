import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class AuthDTO {
    @IsNotEmpty()
    @IsString()
    username: string;
  
    @IsNotEmpty()
    @IsString()
    password: string;
  }


  export class UserRegistrationDto {
    @IsString()
    @IsNotEmpty()
    username: string;
  
    @IsString()
    @IsNotEmpty()
    password: string;
  
    // @IsString()
    // @IsIn(['admin', 'user', 'server'])
    // role: string;
    @IsString()
    @IsIn(['admin', 'user', 'server'])
    role: string;
  }