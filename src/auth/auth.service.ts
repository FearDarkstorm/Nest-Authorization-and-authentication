import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';

import * as users from '../users.json';

console.log(users);

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  signinLocal(dto: AuthDto) {
    console.log('Request DTO:', dto);

    const user = users.find((_user) => _user.email === dto.email);
    console.log('Found User:', user);

    if (!user) throw new UnauthorizedException('User doesn\'t exist');
    if (user.password !== dto.password) throw new UnauthorizedException('Password doesn\'t match');

    console.log('User authenticated:', user);

    return this.signUser(user.id, user.email, 'user');
  }

  signupLocal(dto: AuthDto) {
    // Implement signup logic here
  }

  signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      type,
    });
  }
}

console.log(users);
