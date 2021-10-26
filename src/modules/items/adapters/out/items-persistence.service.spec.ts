import { Test, TestingModule } from '@nestjs/testing';
import { ItemsPersistenceService } from './items-persistence.service';

describe('ItemsPersistenceService', () => {
  let service: ItemsPersistenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsPersistenceService],
    }).compile();

    service = module.get<ItemsPersistenceService>(ItemsPersistenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
