import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './Strategy/Jwt.strategy';

@Module({
  //importing our jwt module with it's secret key
  imports: [JwtModule.register({
    secret:'Real secret'
  })],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
