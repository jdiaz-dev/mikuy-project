import { Module } from '@nestjs/common';
import { BusinessController } from './adapters/in/business.controller';
import { BusinessPersistenceService } from './adapters/out/business-persistence.service';
import { BusinessCypherService } from './adapters/out/business-cypher.service';

@Module({
    controllers: [BusinessController],
    providers: [BusinessPersistenceService, BusinessCypherService],
})
export class BussinessModule {}
