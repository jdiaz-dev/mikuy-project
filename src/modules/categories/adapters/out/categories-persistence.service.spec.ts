import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesPersistenceService } from './categories-persistence.service';

describe('CategoriesPersistenceService', () => {
  let service: CategoriesPersistenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesPersistenceService],
    }).compile();

    service = module.get<CategoriesPersistenceService>(CategoriesPersistenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
