import { Test, TestingModule } from '@nestjs/testing';
import { BussinesPersistenceService } from './bussines-persistence.service';

describe('BussinesPersistenceService', () => {
  let service: BussinesPersistenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BussinesPersistenceService],
    }).compile();

    service = module.get<BussinesPersistenceService>(BussinesPersistenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
