// Starting point

import { ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FallbackExceptionFilter } from './filters/fallback.filter';
import { HttpExceptionFilter } from './filters/http.filter';
import { ValidationException } from './filters/validation.exception';
import { ValidationFilter } from './filters/validation.filter';

const APP_PORT = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // prefix for all APIs
  app.setGlobalPrefix('api');

  // use global filter
  // we configure error filters: most generic at the top, most specific at the bottom
  app.useGlobalFilters(
    // the order of the Filter is important !
    new FallbackExceptionFilter(),
    new HttpExceptionFilter(),
    new ValidationFilter(),
  );

  // use class validator at global level to validate incoming body at all controllers
  app.useGlobalPipes(
    new ValidationPipe({
      // no validation on absent properties
      // or only validate passing properties
      skipMissingProperties: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map(
          error =>
            `${error.property} has wrong value ${error.value}, constrainst: ${error.constraints}`,
        );
        // return a validation exception
        return new ValidationException(messages);
      },
    }),
  );

  await app.listen(APP_PORT);
  console.log(`Server started at ${APP_PORT} PORT`);
}
bootstrap();
