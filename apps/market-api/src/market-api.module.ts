import { Module } from '@nestjs/common';
import { MarketApiController } from './market-api.controller';
import { MarketApiService } from './market-api.service';
import { DomainModule } from '@app/domain';
import { UserController } from './users/user.controller';

@Module({
  imports: [DomainModule],
  controllers: [MarketApiController, UserController],
  providers: [MarketApiService],
})
export class MarketApiModule {}
