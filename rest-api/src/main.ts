// Starting point

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FallbackExceptionFilter } from './filters/fallback.filter';
import { HttpExceptionFilter } from './filters/http.filter';

const APP_PORT = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // prefix for all APIs
  app.setGlobalPrefix('api');

  // use global filter
  app.useGlobalFilters(
    new FallbackExceptionFilter(),
    new HttpExceptionFilter(),
  );

  // use class validator at global level to validate incoming body at all controllers
  app.useGlobalPipes(
    new ValidationPipe({
      // no validation on absent properties
      // or only validate passing properties
      skipMissingProperties: true,
    }),
  );

  await app.listen(APP_PORT);
  console.log(`Server started at ${APP_PORT} PORT`);
}
bootstrap();
