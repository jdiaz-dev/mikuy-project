import { Test, TestingModule } from '@nestjs/testing';
import { AccountsPersistenceService } from './accounts-persistence.service';

describe('AccountsPersistenceService', () => {
  let service: AccountsPersistenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsPersistenceService],
    }).compile();

    service = module.get<AccountsPersistenceService>(AccountsPersistenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
