import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtOptions: JwtModuleOptions = {
  privateKey:'MySuperSecureScret',
  secret: 'MySuperSecureScret',
  signOptions: {
    expiresIn: '5h',
  },
};

export const jwtConfig = registerAs('jwt', () => jwtOptions);
