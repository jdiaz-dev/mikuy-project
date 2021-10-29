import { Inject, Injectable } from '@nestjs/common';

import { InjectCypher, InjectPersistenceManager } from '@liberation-data/drivine/DrivineInjectionDecorators';
import { PersistenceManager } from '@liberation-data/drivine/manager/PersistenceManager';

import { ISetIdsToAccessTheBusiness, ISetIdsToAccessTheMenu } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { ISetQueries } from 'src/shared/interfaces/set-queries';
import { CreateMenuDto } from '../in/dtos/create-menu.dto';
import { UpdateMenuDto } from '../in/dtos/update-menu.dto';
import { IMenuRepository } from './menus.repository';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { v4 as uuidv4 } from 'uuid';
import { createCypherQuery } from './../../../../shared/methods/create-cypher-query';
import { Menu } from './menu.model';

@Injectable()
export class MenusCypherService implements IMenuRepository {
    private variableMenu = 'menuProps';

    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
        @InjectPersistenceManager() readonly persistenceManager: PersistenceManager,
        @InjectCypher(__dirname, './queries-cypher/create-menu') private _createMenu: string,
        @InjectCypher(__dirname, './queries-cypher/get-menu') private _getMenu: string,
        @InjectCypher(__dirname, './queries-cypher/get-menus') private _getMenus: string,
        @InjectCypher(__dirname, './queries-cypher/update-menu') private _updateMenu: string,
        @InjectCypher(__dirname, './queries-cypher/delete-menu') private _deleteMenu: string,
    ) {}
    async createMenu(
        setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness,
        createMenuDto: CreateMenuDto,
    ): Promise<any> {
        try {
            createMenuDto.setId = uuidv4();
            createMenuDto.setState = true;

            const query = createCypherQuery(createMenuDto, this._createMenu, this.variableMenu, {
                ...setIdsToAccessTheBusiness,
            }).transform(Menu);
            const [menu, ...empty] = await this.persistenceManager.query<Menu>(query);

            return menu;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ createMenuDto }).error(error);
        }
    }
    async getMenu(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu): Promise<any> {
        try {
            const query = createCypherQuery({}, this._getMenu, this.variableMenu, {
                ...setIdsToAccessTheMenu,
            }).transform(Menu);
            const [menu, ...empty] = await this.persistenceManager.query<Menu>(query);

            return menu;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ setIdsToAccessTheMenu }).error(error);
        }
    }

    async getMenus(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness, setQueries: ISetQueries): Promise<any> {
        try {
            const query = createCypherQuery({}, this._getMenus, this.variableMenu, {
                ...setIdsToAccessTheBusiness,
                ...setQueries,
            }).transform(Menu);
            const [menus, ...empty] = await this.persistenceManager.query<Menu>(query);

            return menus;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ setIdsToAccessTheBusiness }).error(error);
        }
    }

    async udpateMenu(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu, updateMenuDto: UpdateMenuDto): Promise<any> {
        try {
            const query = createCypherQuery(updateMenuDto, this._updateMenu, this.variableMenu, {
                ...setIdsToAccessTheMenu,
            }).transform(Menu);
            const [menu, ...empty] = await this.persistenceManager.query<Menu>(query);

            return menu;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ updateMenuDto }).error(error);
        }
    }
    async deleteMenu(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu): Promise<any> {
        try {
            const query = createCypherQuery({ state: false }, this._deleteMenu, this.variableMenu, {
                ...setIdsToAccessTheMenu,
            }).transform(Menu);
            const [menu, ...empty] = await this.persistenceManager.query<Menu>(query);

            return menu;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ setIdsToAccessTheMenu }).error(error);
        }
    }
}
