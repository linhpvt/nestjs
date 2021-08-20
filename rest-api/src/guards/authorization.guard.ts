import { intersection } from 'lodash';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private roles: string[]) {}
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const userRoles = req['user'] || [];
    const allowed = this.isAlowed(userRoles);

    // has permission
    if (allowed) {
      return allowed;
    }

    // forbidden
    throw new ForbiddenException();
  }

  private isAlowed(userRoles: string[]) {
    // all permission
    if (userRoles.indexOf('*') >= 0) {
      return true;
    }

    // specific permission
    const share = intersection(userRoles, this.roles);
    const allowed = share.length > 0;
    return allowed;
  }
}
