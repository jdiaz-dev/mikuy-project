import { Test, TestingModule } from '@nestjs/testing';
import { MenusPersistenceService } from './menus-persistence.service';

describe('MenusPersistenceService', () => {
  let service: MenusPersistenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenusPersistenceService],
    }).compile();

    service = module.get<MenusPersistenceService>(MenusPersistenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
