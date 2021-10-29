import { Test, TestingModule } from '@nestjs/testing';
import { BusinessCypherService } from './business-cypher.service';

describe('BusinessCypherService', () => {
    let service: BusinessCypherService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BusinessCypherService],
        }).compile();

        service = module.get<BusinessCypherService>(BusinessCypherService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
