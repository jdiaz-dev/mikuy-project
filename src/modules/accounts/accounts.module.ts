import { Module } from '@nestjs/common';
import { AccountsController } from './adapters/in/accounts.controller';
import { AccountsPersistenceService } from './adapters/out/accounts-persistence.service';
import { AccountsCypherService } from './adapters/out/accounts-cypher.service';

@Module({
    controllers: [AccountsController],
    providers: [AccountsPersistenceService, AccountsCypherService],
})
export class AccountsModule {}
