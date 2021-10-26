import { Test, TestingModule } from '@nestjs/testing';
import { AccountsCypherService } from './accounts-cypher.service';

describe('AccountsCypherService', () => {
  let service: AccountsCypherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsCypherService],
    }).compile();

    service = module.get<AccountsCypherService>(AccountsCypherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
