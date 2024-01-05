import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { init } from './model/app.model';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await init();

  await app.listen(3000);
}

bootstrap();
