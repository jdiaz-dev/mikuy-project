import { Test, TestingModule } from '@nestjs/testing';
import { MenusCypherService } from './menus-cypher.service';

describe('MenusCypherService', () => {
  let service: MenusCypherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenusCypherService],
    }).compile();

    service = module.get<MenusCypherService>(MenusCypherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
