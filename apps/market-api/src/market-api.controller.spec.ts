import { Test, TestingModule } from '@nestjs/testing';
import { MarketApiController } from './market-api.controller';
import { MarketApiService } from './market-api.service';

describe('MarketApiController', () => {
  let marketApiController: MarketApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MarketApiController],
      providers: [MarketApiService],
    }).compile();

    marketApiController = app.get<MarketApiController>(MarketApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(marketApiController.getHello()).toBe('Hello World!');
    });
  });
});
