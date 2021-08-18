import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class GetUserMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    // @ts-ignore
    const authorization = req.headers.authorization || '';
    const authParts = authorization.split(' ');
    const token = authParts[authParts.length - 1];

    // not found
    if (!token) {
      next();
      return;
    }
    try {
      // 1. parse token to get user info
      // 2. attatch to the request for further use
      // req['user'] = userInfo;
    } catch (ex) {
      console.log(`Bad token`, ex.message);
    }
    // always call next to pass processing to next middleware or controller
    next();
  }
}
