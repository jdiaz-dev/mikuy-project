import { Module } from '@nestjs/common';
import { CategoriesController } from './adapters/in/categories.controller';
import { CategoriesPersistenceService } from './adapters/out/categories-persistence.service';
import { CategoriesCypherService } from './adapters/out/categories-cypher.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesPersistenceService, CategoriesCypherService]
})
export class CategoriesModule { }
