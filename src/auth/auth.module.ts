import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UserModule, HttpModule.register({})],
  providers: [JwtService, AuthService, AuthResolver, JwtStrategy],
})
export class AuthModule {}
