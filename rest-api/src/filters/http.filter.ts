import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Response } from 'express';
import { buildResponseDto } from '../responses/response.dto';

// what we catch. it's all about HttpException
@Catch(HttpException)

// implenent ExceptionFilter
export class HttpExceptionFilter implements ExceptionFilter<any> {
  catch(ex: HttpException, host: ArgumentsHost) {
    const ctx: HttpArgumentsHost = host.switchToHttp();
    const res: Response = ctx.getResponse();
    const status = ex.getStatus();
    const ret = buildResponseDto<any>(status, null, [ex.message.message]);
    res.json(ret);
    return res;
  }
}
