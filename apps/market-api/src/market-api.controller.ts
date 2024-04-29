import { Controller, Get } from '@nestjs/common';
import { MarketApiService } from './market-api.service';

@Controller()
export class MarketApiController {
  constructor(private readonly marketApiService: MarketApiService) {}

  @Get()
  getHello(): string {
    return this.marketApiService.getHello();
  }
}
