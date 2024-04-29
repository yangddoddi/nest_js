import { Module } from '@nestjs/common';
import { AdminApiController } from './admin-api.controller';
import { AdminApiService } from './admin-api.service';
import { DomainModule } from '@app/domain';

@Module({
  imports: [DomainModule],
  controllers: [AdminApiController],
  providers: [AdminApiService],
})
export class AdminApiModule {}
