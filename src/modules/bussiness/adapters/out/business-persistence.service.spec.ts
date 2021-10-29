import { Test, TestingModule } from '@nestjs/testing';
import { BusinessPersistenceService } from './business-persistence.service';

describe('BusinessPersistenceService', () => {
    let service: BusinessPersistenceService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BusinessPersistenceService],
        }).compile();

        service = module.get<BusinessPersistenceService>(BusinessPersistenceService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
