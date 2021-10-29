import { Inject, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { InjectCypher, InjectPersistenceManager } from '@liberation-data/drivine/DrivineInjectionDecorators';
import { PersistenceManager } from '@liberation-data/drivine/manager/PersistenceManager';

import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { ISetIdsToAccessTheCategory, ISetIdsToAccessTheMenu } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { CreateCategoryDto } from '../in/dtos/create-category.dto';
import { ISetQueries } from 'src/shared/interfaces/set-queries';
import { UpdateCategoryDto } from '../in/dtos/update-category.dto';
import { ICategoriesRepository } from './categories-repository';
import { Category } from './category.model';
import { createCypherQuery } from './../../../../shared/methods/create-cypher-query';

@Injectable()
export class CategoriesCypherService implements ICategoriesRepository {
    private variableCategory = 'categoryProps';

    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
        @InjectPersistenceManager() readonly persistenceManager: PersistenceManager,
        @InjectCypher(__dirname, './queries-cypher/create-category') private _createCategory: string,
        @InjectCypher(__dirname, './queries-cypher/get-category') private _getCategory: string,
        @InjectCypher(__dirname, './queries-cypher/get-categories') private _getCategories: string,
        @InjectCypher(__dirname, './queries-cypher/update-category') private _updateCategory: string,
        @InjectCypher(__dirname, './queries-cypher/delete-category') private _deleteCategory: string,
    ) {}
    async createCategory(
        setIdsToAccessTheMenu: ISetIdsToAccessTheMenu,
        createCategoryDto: CreateCategoryDto,
    ): Promise<any> {
        try {
            createCategoryDto.setId = uuidv4();
            createCategoryDto.setState = true;

            const query = createCypherQuery(createCategoryDto, this._createCategory, this.variableCategory, {
                ...setIdsToAccessTheMenu,
            }).transform(Category);
            const [category, ...empty] = await this.persistenceManager.query<Category>(query);

            return category;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ createCategoryDto }).error(error);
        }
    }

    async getCategory(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory): Promise<any> {
        try {
            const query = createCypherQuery({}, this._getCategory, this.variableCategory, {
                ...setIdsToAccessTheCategory,
            }).transform(Category);
            const [category, ...empty] = await this.persistenceManager.query<Category>(query);

            return category;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ setIdsToAccessTheCategory }).error(error);
        }
    }

    async getCategories(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu, setQueries: ISetQueries): Promise<any> {
        try {
            const query = createCypherQuery(setIdsToAccessTheMenu, this._getCategories, this.variableCategory, {
                ...setIdsToAccessTheMenu,
                ...setQueries,
            }).transform(Category);
            const categories = await this.persistenceManager.query<Category>(query);

            return categories;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ setIdsToAccessTheMenu, setQueries }).error(error);
        }
    }
    async udpateCategory(
        setIdsToAccessTheCategory: ISetIdsToAccessTheCategory,
        updateCategoryDto: UpdateCategoryDto,
    ): Promise<any> {
        try {
            const query = createCypherQuery(updateCategoryDto, this._updateCategory, this.variableCategory, {
                ...setIdsToAccessTheCategory,
            }).transform(Category);
            const [category, ...empty] = await this.persistenceManager.query<Category>(query);

            return category;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ updateCategoryDto }).error(error);
        }
    }
    async deleteCategory(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory): Promise<any> {
        try {
            const query = createCypherQuery({ state: false }, this._deleteCategory, this.variableCategory, {
                ...setIdsToAccessTheCategory,
            }).transform(Category);
            const [category, ...empty] = await this.persistenceManager.query<Category>(query);

            return category;
        } catch (error) {
            console.log('------------------error', error);
            this.logger.child({ setIdsToAccessTheCategory }).error(error);
        }
    }
}
