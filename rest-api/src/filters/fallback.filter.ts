import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';

// we don't pass any Type of Exception to Catch annotation
// it will cactch all exceptions
@Catch()
export class FallbackExceptionFilter implements ExceptionFilter {
  catch(ex: any, host: ArgumentsHost) {
    const res: Response = host.switchToHttp().getResponse();
    res.status(500).json({
      code: 500,
      data: null,
      messages: [ex.message || 'Internal server error'],
    });
  }
}
