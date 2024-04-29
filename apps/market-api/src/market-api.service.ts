import { Injectable } from '@nestjs/common';

@Injectable()
export class MarketApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
