import { Test, TestingModule } from '@nestjs/testing';
import { BussinesCypherService } from './bussines-cypher.service';

describe('BussinesCypherService', () => {
  let service: BussinesCypherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BussinesCypherService],
    }).compile();

    service = module.get<BussinesCypherService>(BussinesCypherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
