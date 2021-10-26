import { Injectable } from '@nestjs/common';
import { IAccountsRepository } from './accounts.repository';

import { CypherStatement, QuerySpecification, Transactional } from '@liberation-data/drivine';

import { InjectCypher, InjectPersistenceManager } from '@liberation-data/drivine/DrivineInjectionDecorators';
import { PersistenceManager } from '@liberation-data/drivine/manager/PersistenceManager';
import { ObjectUtils } from '@liberation-data/drivine/utils';
import { v4 as uuidv4 } from 'uuid';
import { CreateAccountDto } from './../in/dtos/create-account.dto';
import { UpdateProfileAccountDto } from '../in/dtos/update-profile-account';
import { createCypherQuery } from '../../../../shared/methods/create-cypher-query';
import { UpdatePhoneDto } from '../in/dtos/update-phone.dto';
import { UpdatePhotoDto } from '../in/dtos/update-photo.dto';

@Injectable()
export class AccountsCypherService implements IAccountsRepository {
    constructor(
        @InjectPersistenceManager() readonly persistenceManager: PersistenceManager,
        @InjectCypher(__dirname, './queries-cypher/create-account') readonly _saveAccount: string,
        @InjectCypher(__dirname, './queries-cypher/get-account-by-email') readonly _getAccountByEamil: string,
        @InjectCypher(__dirname, './queries-cypher/update-phone') readonly _updatePhone: string,
        @InjectCypher(__dirname, './queries-cypher/update-photo') readonly _updatePhoto: string,
        @InjectCypher(__dirname, './queries-cypher/update-profile') readonly _updateProfile: string,
    ) {}
    createAccount(createAccountDto: CreateAccountDto): Promise<any> {
        createAccountDto.setId = uuidv4();

        const query = createCypherQuery(createAccountDto, this._saveAccount, 'accountProps');
        return this.persistenceManager.query(query);
    }
    getAccountByEmail(accountId: string): any {}
    async updateProfile(accountId: string, updateProfileAccount: UpdateProfileAccountDto): Promise<any> {
        const query = createCypherQuery(updateProfileAccount, this._updateProfile, 'updateProfile', { accountId });
        const [{ password, ...profile }, ...empty]: any = await this.persistenceManager.query(query);
        console.log('------------profileUpdated', profile);
        return profile;
    }
    async updatePhone(accountId: string, updatePhoneDto: UpdatePhoneDto): Promise<any> {
        const query = createCypherQuery(updatePhoneDto, this._updatePhone, 'phone', { accountId });
        return await this.persistenceManager.query(query);
    }
    async updatePhoto(accountId: string, updatePhotoDto: UpdatePhotoDto): Promise<any> {
        const query = createCypherQuery(updatePhotoDto, this._updatePhoto, 'photo', { accountId });
        return await this.persistenceManager.query(query);
    }
}
