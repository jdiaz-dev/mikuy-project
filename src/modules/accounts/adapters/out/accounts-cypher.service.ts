import { Inject, Injectable } from '@nestjs/common';
import { IAccountsRepository } from './accounts.repository';

import { InjectCypher, InjectPersistenceManager } from '@liberation-data/drivine/DrivineInjectionDecorators';
import { PersistenceManager } from '@liberation-data/drivine/manager/PersistenceManager';

import { v4 as uuidv4 } from 'uuid';
import { CreateAccountDto } from './../in/dtos/create-account.dto';
import { UpdateProfileAccountDto } from '../in/dtos/update-profile-account';
import { createCypherQuery } from '../../../../shared/methods/create-cypher-query';
import { UpdatePhoneDto } from '../in/dtos/update-phone.dto';
import { UpdatePhotoDto } from '../in/dtos/update-photo.dto';
import { Account } from './account.model';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class AccountsCypherService implements IAccountsRepository {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,

        @InjectPersistenceManager() readonly persistenceManager: PersistenceManager,
        @InjectCypher(__dirname, './queries-cypher/create-account') readonly _createAccount: string,
        @InjectCypher(__dirname, './queries-cypher/get-account-by-email') readonly _getAccountByEamil: string,
        @InjectCypher(__dirname, './queries-cypher/update-phone') readonly _updatePhone: string,
        @InjectCypher(__dirname, './queries-cypher/update-photo') readonly _updatePhoto: string,
        @InjectCypher(__dirname, './queries-cypher/update-profile') readonly _updateProfile: string,
    ) {}
    async createAccount(createAccountDto: CreateAccountDto): Promise<any> {
        try {
            createAccountDto.setId = uuidv4();

            const query = createCypherQuery(createAccountDto, this._createAccount, 'accountProps').transform(Account);
            const [account, ...empty] = await this.persistenceManager.query<Account>(query);

            return account.skipPassword();
        } catch (error) {
            this.logger.child({ createAccountDto }).error(error);
        }
    }

    //to implement
    getAccountByEmail(accountId: string): any {}
    async updateProfile(accountId: string, updateProfileAccount: UpdateProfileAccountDto): Promise<any> {
        try {
            const query = createCypherQuery(updateProfileAccount, this._updateProfile, 'updateProfile', {
                accountId,
            }).transform(Account);

            const [account, ...empty] = await this.persistenceManager.query<Account>(query);

            return account.skipPassword();
        } catch (error) {
            this.logger.child({ updateProfileAccount, accountId }).error(error);
        }
    }
    async updatePhone(accountId: string, updatePhoneDto: UpdatePhoneDto): Promise<any> {
        try {
            const query = createCypherQuery(updatePhoneDto, this._updatePhone, 'phone', { accountId }).transform(
                Account,
            );
            const [account, ...empty] = await this.persistenceManager.query<Account>(query);

            return account.skipPassword();
        } catch (error) {
            this.logger.child({ updatePhoneDto, accountId }).error(error);
        }
    }
    async updatePhoto(accountId: string, updatePhotoDto: UpdatePhotoDto): Promise<any> {
        try {
            const query = createCypherQuery(updatePhotoDto, this._updatePhoto, 'photo', { accountId }).transform(
                Account,
            );
            const [account, ...empty] = await this.persistenceManager.query<Account>(query);

            return account.skipPassword();
        } catch (error) {
            this.logger.child({ UpdatePhotoDto, accountId }).error(error);
        }
    }
}
