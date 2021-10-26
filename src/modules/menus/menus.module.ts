import { Module } from '@nestjs/common';
import { MenusController } from './adapters/in/menus.controller';
import { MenusPersistenceService } from './adapters/out/menus-persistence.service';
import { MenusCypherService } from './adapters/out/menus-cypher.service';

@Module({
  controllers: [MenusController],
  providers: [MenusPersistenceService, MenusCypherService]
})
export class MenusModule {}
