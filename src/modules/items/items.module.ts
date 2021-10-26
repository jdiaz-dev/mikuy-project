import { Module } from '@nestjs/common';
import { ItemsController } from './adapters/in/items.controller';
import { ItemsPersistenceService } from './adapters/out/items-persistence.service';
import { ItemsCypherService } from './adapters/out/items-cypher.service';

@Module({
  controllers: [ItemsController],
  providers: [ItemsPersistenceService, ItemsCypherService]
})
export class ItemsModule {}
