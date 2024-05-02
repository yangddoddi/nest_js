import { NestFactory } from '@nestjs/core';
import { MarketApiModule } from './market-api.module';
import { Logger, ValidationPipe } from "@nestjs/common";
import { LoggingInterceptor } from "@app/config/logging-interceptor.service";

async function bootstrap() {
  const app = await NestFactory.create(MarketApiModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalInterceptors(new LoggingInterceptor(await app.get(Logger)));

  await app.listen(3000);
}
bootstrap();
