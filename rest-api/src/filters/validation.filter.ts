import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { ResponseDto } from '../responses/response.dto';
import { ValidationException } from './validation.exception';

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter {
  catch(ex: ValidationException, host: ArgumentsHost) {
    const res: Response = host.switchToHttp().getResponse();
    const status = ex.getStatus();
    const ret = {
      code: status,
      data: null,
      messages: ex.validationErrors,
    } as ResponseDto<null>;
    return res.json(ret);
  }
}
