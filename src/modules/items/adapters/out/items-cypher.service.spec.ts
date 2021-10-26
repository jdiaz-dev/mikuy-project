import { Test, TestingModule } from '@nestjs/testing';
import { ItemsCypherService } from './items-cypher.service';

describe('ItemsCypherService', () => {
  let service: ItemsCypherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsCypherService],
    }).compile();

    service = module.get<ItemsCypherService>(ItemsCypherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
