import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesCypherService } from './categories-cypher.service';

describe('CategoriesCypherService', () => {
  let service: CategoriesCypherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesCypherService],
    }).compile();

    service = module.get<CategoriesCypherService>(CategoriesCypherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
