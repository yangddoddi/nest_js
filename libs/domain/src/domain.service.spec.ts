import { Test, TestingModule } from '@nestjs/testing';
import { DomainService } from '@app/domain/domain.service';

describe('DomainService', () => {
  let service: DomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DomainService],
    }).compile();

    service = module.get<DomainService>(DomainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('')
});
