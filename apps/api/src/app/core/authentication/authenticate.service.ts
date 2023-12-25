import {  Injectable } from '@nestjs/common';

import { InjectRepository ,} from '@nestjs/typeorm';
import { Repository, } from 'typeorm';

import { Authenticate } from './authenticate.entity';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
@Injectable()
export class AuthenticateService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Authenticate)
    private authRepository: Repository<Authenticate>,
  ) {}

  async login(username: string, password: string): Promise<any> {
    // Find the user by username
    const auth = await this.authRepository.findOne({ where: { username } });

    if (auth && auth.password === password) {
      // Password is correct
      const authId = auth.id;
      const user = await this.userRepository.findOne({ where: { auth: { id: authId } } });
      console.log(user)
      const payload = { username: auth.username, id: user.id, role: user.role, status:user.status  };
      // Generate and return a JWT token
      const token = await this.jwtService.signAsync(payload)
      const userobject ={ payload, token }
      return userobject;
    }
    // Invalid credentials
    return null;
  }

  async registerUser(username: string, password: string, role: string): Promise<User> {
    // Check if the username is already taken
    const existingAuth = await this.authRepository.findOne({where:{ username }});
    if (existingAuth) {
      throw new Error('Username is already taken.');
    }

    // Create the Auth entity
    const auth = this.authRepository.create({ username, password });
    await this.authRepository.save(auth);

    // Create the User entity with role
    const user = this.userRepository.create({ status: true, role, auth });
    await this.userRepository.save(user);

    return user;
  }


  async isTokenValid(token: string): Promise<boolean> {
    try {
      await this.jwtService.verifyAsync(token);
      return true;
    } catch (error) {
      return false;
    }
 }


}
