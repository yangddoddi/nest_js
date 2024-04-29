import { Module } from '@nestjs/common';
import { MarketApiController } from './market-api.controller';
import { MarketApiService } from './market-api.service';
import { DomainModule } from '@app/domain';

@Module({
  imports: [DomainModule],
  controllers: [MarketApiController],
  providers: [MarketApiService],
})
export class MarketApiModule {}
