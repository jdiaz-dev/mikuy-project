import { Module } from '@nestjs/common';
import { BusinessController } from './adapters/in/business.controller';
import { BussinesPersistenceService } from './adapters/out/bussines-persistence.service';
import { BussinesCypherService } from './adapters/out/bussines-cypher.service';

@Module({
  controllers: [BusinessController],
  providers: [BussinesPersistenceService, BussinesCypherService],
})
export class BussinessModule {}
