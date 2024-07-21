import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotEnv from 'dotenv';

async function bootstrap() {
  dotEnv.config();
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix("/api/notification"); 
  await app.listen(process.env.PORT || 4008);
}
bootstrap();
