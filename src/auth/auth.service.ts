import { firstValueFrom } from 'rxjs';
import { JwtWithUser } from '../entities/auth';
import { UserService } from '../user/user.service';
import { generateJWT } from '../util/generateJWT';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { JwtService } from '@nestjs/jwt';
import { privateSecret } from './util/jwt.util';
import { pick } from 'lodash';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly httpService: HttpService,
    private jwtService: JwtService,
  ) {}

  async baseLogin(email: string, password: string) {
    const user = await this.userService.getOne({
      where: { username: email, provider: password },
    });

    if (!user) {
      return new GraphQLError('No user found.');
    }

    const picked = pick(user, ['id', 'role']);
    const token = await this.jwtService.signAsync(picked, {
      secret: privateSecret,
      expiresIn: '1y',
    });
    // const jwt = generateJWT(user);
    return { jwt: token, ...user };
  }
}
