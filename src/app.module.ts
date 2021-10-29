import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './modules/categories/categories.module';
import { ItemsModule } from './modules/items/items.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { BussinessModule } from './modules/bussiness/bussiness.module';
import { MenusModule } from './modules/menus/menus.module';
import { DrivineModule, DrivineModuleOptions } from '@liberation-data/drivine/DrivineModule';
import { DatabaseRegistry } from '@liberation-data/drivine/connection/DatabaseRegistry';
import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';
import { winstonAzureBlob } from 'winston-azure-blob';

export const LEVEL_LOGS = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
};

@Module({
    imports: [
        DrivineModule.withOptions(<DrivineModuleOptions>{
            connectionProviders: [DatabaseRegistry.buildOrResolveFromEnv()],
        }),
        WinstonModule.forRoot({
            levels: LEVEL_LOGS,
            format: format.combine(format.timestamp(), format.json()),
            transports: [new transports.File({ filename: 'file.log' })],
            exceptionHandlers: [new transports.File({ filename: 'exceptions.log' })],
            /* transports: [
            new transports.File({ filename: 'file.log' })], */
            /* transports: [
                winstonAzureBlob({
                    account: {
                        name: APP_SETTINGS.AZURE.ACCOUNT_AZURE_STORAGE,
                        key: APP_SETTINGS.AZURE.ACCOUNT_KEY_AZURE_STORAGE,
                    },
                    containerName: APP_SETTINGS.AZURE.CONTAINER_LOGS,
                    blobName: APP_SETTINGS.AZURE.BLOB_LOGS,
                }),
            ], */
        }),
        CategoriesModule,
        ItemsModule,
        AccountsModule,
        BussinessModule,
        MenusModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
