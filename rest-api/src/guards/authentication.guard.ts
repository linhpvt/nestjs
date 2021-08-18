import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { CanActivate } from '@nestjs/common';

export class AuthenticationGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const user = context.switchToHttp().getRequest().user;

    // you can use one of two implementation
    if (!user) {
      throw new UnauthorizedException('You are not allowed to access the API');
    }
    // or
    // if (user) {
    //   isAuthenticated = true;
    // }
    return true;
  }
}
