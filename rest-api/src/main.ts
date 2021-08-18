// Starting point

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http.filter';

const APP_PORT = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // prefix for all APIs
  app.setGlobalPrefix('api');

  // use global filter
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(APP_PORT);
  console.log(`Server started at ${APP_PORT} PORT`);
}
bootstrap();
