// Starting point

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// (async () => {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(9000);
// })();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(9000);
}
bootstrap();
