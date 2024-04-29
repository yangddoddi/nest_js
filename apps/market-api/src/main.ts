import { NestFactory } from '@nestjs/core';
import { MarketApiModule } from './market-api.module';

async function bootstrap() {
  const app = await NestFactory.create(MarketApiModule);
  await app.listen(3000);
}
bootstrap();
