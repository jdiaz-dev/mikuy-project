import { Injectable } from '@nestjs/common';
import { ICreateAccountRequest } from '../../application/ports/in/create-account.request';
import { IUpdatePhoneRequest } from '../../application/ports/in/update-phone.request';
import { IUpdatePhotoRequest } from '../../application/ports/in/update-photo.request.request';
import { IUpdateProfileAccountRequest } from '../../application/ports/in/update-profile-account.request';
import { CreateAccountDto } from '../in/dtos/create-account.dto';
import { UpdatePhoneDto } from '../in/dtos/update-phone.dto';
import { UpdateProfileAccountDto } from '../in/dtos/update-profile-account';
import { AccountsCypherService } from './accounts-cypher.service';
import { IAccountsRepository } from './accounts.repository';
import { UpdatePhotoDto } from '../in/dtos/update-photo.dto';

@Injectable()
export class AccountsPersistenceService
    implements ICreateAccountRequest, IUpdateProfileAccountRequest, IUpdatePhoneRequest, IUpdatePhotoRequest
{
    private accountsRepository: IAccountsRepository;
    constructor(accountsCypherService: AccountsCypherService) {
        this.accountsRepository = accountsCypherService;
    }
    createTheAccount(createAccountDto: CreateAccountDto): any {
        return this.accountsRepository.createAccount(createAccountDto);
    }
    getAccountByEmail(): any {}
    updateTheProfileAccount(accountId: string, updateProfileAccountDto: UpdateProfileAccountDto): Promise<any> {
        return this.accountsRepository.updateProfile(accountId, updateProfileAccountDto);
    }
    updateThePhone(accountId: string, updatePhoneDto: UpdatePhoneDto): Promise<any> {
        return this.accountsRepository.updatePhone(accountId, updatePhoneDto);
    }
    updateThePhoto(accountId: string, updatePhotoDto: UpdatePhotoDto): any {
        return this.accountsRepository.updatePhoto(accountId, updatePhotoDto);
    }
}
