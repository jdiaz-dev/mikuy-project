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

@Module({
    imports: [
        DrivineModule.withOptions(<DrivineModuleOptions>{
            connectionProviders: [DatabaseRegistry.buildOrResolveFromEnv()],
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
export class AppModule { }
