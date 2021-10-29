import { Inject, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { InjectCypher, InjectPersistenceManager } from '@liberation-data/drivine/DrivineInjectionDecorators';
import { PersistenceManager } from '@liberation-data/drivine/manager/PersistenceManager';

import { ISetIdsToAccessTheCategory, ISetIdsToAccessTheItem } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { ISetQueries } from 'src/shared/interfaces/set-queries';
import { CreateItemDto } from '../in/dtos/create-item.dto';
import { UpdateItemDto } from '../in/dtos/update-item.dto';
import { ICategoriesRepository } from './categories.repository';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { Item } from './Item.model';
import { createCypherQuery } from './../../../../shared/methods/create-cypher-query';

@Injectable()
export class ItemsCypherService implements ICategoriesRepository {
    private variableItem = 'itemProps';

    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,

        @InjectPersistenceManager() readonly persistenceManager: PersistenceManager,
        @InjectCypher(__dirname, './queries-cypher/create-item') private _createItem: string,
        @InjectCypher(__dirname, './queries-cypher/get-item') private _getItem: string,
        @InjectCypher(__dirname, './queries-cypher/get-items') private _getItems: string,
        @InjectCypher(__dirname, './queries-cypher/update-item') private _updateItem: string,
        @InjectCypher(__dirname, './queries-cypher/delete-item') private _deleteItem: string,
    ) {}

    async createItem(
        setIdsToAccessTheCategory: ISetIdsToAccessTheCategory,
        createItemDto: CreateItemDto,
    ): Promise<any> {
        try {
            createItemDto.setId = uuidv4();
            createItemDto.setState = true;

            const query = createCypherQuery(createItemDto, this._createItem, this.variableItem, {
                ...setIdsToAccessTheCategory,
            }).transform(Item);
            const [item, ...empty] = await this.persistenceManager.query<Item>(query);

            return item;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ createItemDto }).error(error);
        }
    }
    async getItem(setIdsToAccessTheItem: ISetIdsToAccessTheItem): Promise<any> {
        try {
            const query = createCypherQuery({}, this._getItem, this.variableItem, {
                ...setIdsToAccessTheItem,
            }).transform(Item);
            const [item, ...empty] = await this.persistenceManager.query<Item>(query);

            return item;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ setIdsToAccessTheItem }).error(error);
        }
    }
    async getItems(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory, setQueries: ISetQueries): Promise<any> {
        try {
            const query = createCypherQuery({}, this._getItems, this.variableItem, {
                ...setIdsToAccessTheCategory,
                ...setQueries,
            }).transform(Item);
            const [items, ...empty] = await this.persistenceManager.query<Item>(query);

            return items;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ setIdsToAccessTheCategory }).error(error);
        }
    }
    async updateItem(
        setIdsToAccessTheCategory: ISetIdsToAccessTheCategory,
        updateItemDto: UpdateItemDto,
    ): Promise<any> {
        try {
            const query = createCypherQuery(updateItemDto, this._updateItem, this.variableItem, {
                ...setIdsToAccessTheCategory,
            }).transform(Item);
            const [item, ...empty] = await this.persistenceManager.query<Item>(query);

            return item;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ updateItemDto }).error(error);
        }
    }
    async deleteItem(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory): Promise<any> {
        try {
            const query = createCypherQuery({ state: false }, this._deleteItem, this.variableItem, {
                ...setIdsToAccessTheCategory,
            }).transform(Item);
            const [item, ...empty] = await this.persistenceManager.query<Item>(query);

            return item;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ setIdsToAccessTheCategory }).error(error);
        }
    }
}
