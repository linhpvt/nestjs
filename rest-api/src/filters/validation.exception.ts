import { BadRequestException } from '@nestjs/common';

export class ValidationException extends BadRequestException {
  // report each validation property of passing body as string
  public validationErrors: string[];
  constructor(validationErrors: string[]) {
    super();
    this.validationErrors = validationErrors;
  }
}
