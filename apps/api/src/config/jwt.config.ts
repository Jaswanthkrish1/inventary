import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtOptions: JwtModuleOptions = {
  secret: process.env.JWT_SECRET ?? 'MySuperSecureScret',
  signOptions: {
    expiresIn: '5h',
  },
};

export const jwtConfig = registerAs('jwt', () => jwtOptions);
