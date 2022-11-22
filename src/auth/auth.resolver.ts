import { JwtWithUser } from '../entities/auth/auth.entity';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => JwtWithUser)
  kakaoLogin(@Args('accessToken') accessToken: string) {
    return this.authService.kakaoLogin(accessToken);
  }

  @Mutation(() => JwtWithUser)
  baseLogin(@Args('email') email: string, @Args('password') password: string) {
    return this.authService.baseLogin(email, password);
  }
}
