import { Inject, Injectable } from '@nestjs/common';
import { CreateBusinessDto } from '../in/dtos/create-business.dto';
import { UpdateBusinessDto } from '../in/dtos/update-business.dto';
import { UpdateLogoDto } from '../in/dtos/update-logo.dto';
import { ISetIdsToAccessTheBusiness } from '../../../../shared/interfaces/set-ids/set-ids-to-access';
import { IBussinesRepository } from './bussines.repository';

import { InjectCypher, InjectPersistenceManager } from '@liberation-data/drivine/DrivineInjectionDecorators';
import { PersistenceManager } from '@liberation-data/drivine/manager/PersistenceManager';

import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { v4 as uuidv4 } from 'uuid';
import { Business } from './bussines.model';
import { Logger } from 'winston';
import { createCypherQuery } from '../../../../shared/methods/create-cypher-query';

@Injectable()
export class BusinessCypherService implements IBussinesRepository {
    private variableBussines = 'businessProps';
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,

        @InjectPersistenceManager() readonly persistenceManager: PersistenceManager,
        @InjectCypher(__dirname, './queries-cypher/create-business') private _createBusines: string,
        @InjectCypher(__dirname, './queries-cypher/get-business') private _getBusiness: string,
        @InjectCypher(__dirname, './queries-cypher/update-business') private _updateBusiness: string,
        @InjectCypher(__dirname, './queries-cypher/update-logo') private _updateLogo: string,
        @InjectCypher(__dirname, './queries-cypher/delete-business') private _deleteBusiness: string,
    ) {}

    async createBussines(accountId: string, createBusinessDto: CreateBusinessDto): Promise<any> {
        try {
            createBusinessDto.setId = uuidv4();
            createBusinessDto.setState = true;

            const query = createCypherQuery(createBusinessDto, this._createBusines, this.variableBussines, {
                accountId,
            }).transform(Business);
            const [bussines, ...empty] = await this.persistenceManager.query<Business>(query);

            return bussines;
        } catch (error) {
            this.logger.child({ createBusinessDto }).error(error);
        }
    }
    async getBussines(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness): Promise<any> {
        try {
            const query = createCypherQuery({}, this._getBusiness, '', {
                ...setIdsToAccessTheBusiness,
            }).transform(Business);
            const [business, ...empty] = await this.persistenceManager.query<Business>(query);

            return business;
        } catch (error) {
            this.logger.child({ ...setIdsToAccessTheBusiness }).error(error);
        }
    }
    async updateBussiness(
        setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness,
        updateBusinessDto: UpdateBusinessDto,
    ): Promise<any> {
        try {
            const query = createCypherQuery(updateBusinessDto, this._updateBusiness, this.variableBussines, {
                ...setIdsToAccessTheBusiness,
            }).transform(Business);
            const [bussines, ...empty] = await this.persistenceManager.query<Business>(query);

            return bussines;
        } catch (error) {
            this.logger.child({ ...setIdsToAccessTheBusiness }).error(error);
        }
    }
    async updateLogo(
        setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness,
        updateLogoDto: UpdateLogoDto,
    ): Promise<any> {
        try {
            const query = createCypherQuery(updateLogoDto, this._updateLogo, this.variableBussines, {
                ...setIdsToAccessTheBusiness,
            }).transform(Business);
            const [bussines, ...empty] = await this.persistenceManager.query<Business>(query);

            return bussines;
        } catch (error) {
            this.logger.child({ ...setIdsToAccessTheBusiness }).error(error);
        }
    }
    async deleteBussines(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness): Promise<any> {
        try {
            const query = createCypherQuery({ state: false }, this._deleteBusiness, this.variableBussines, {
                ...setIdsToAccessTheBusiness,
            }).transform(Business);
            const [bussines, ...empty] = await this.persistenceManager.query<Business>(query);
            console.log('------------bussines', bussines);
            return bussines;
        } catch (error) {
            this.logger.child({ ...setIdsToAccessTheBusiness }).error(error);
        }
    }
}
