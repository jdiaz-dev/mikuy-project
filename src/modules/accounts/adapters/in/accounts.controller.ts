import { Controller, Body, Post, Put, Param } from '@nestjs/common';
import { ICreateAccountRequest } from '../../application/ports/in/create-account.request';
import { IUpdatePhoneRequest } from '../../application/ports/in/update-phone.request';
import { IUpdatePhotoRequest } from '../../application/ports/in/update-photo.request.request';
import { IUpdateProfileAccountRequest } from '../../application/ports/in/update-profile-account.request';
import { AccountsPersistenceService } from '../out/accounts-persistence.service';
import { CreateAccountDto } from './dtos/create-account.dto';
import { UpdatePhoneDto } from './dtos/update-phone.dto';
import { UpdateProfileAccountDto } from './dtos/update-profile-account';

@Controller('accounts')
export class AccountsController {
    createAccountRequest: ICreateAccountRequest;
    updateProfileAccountRequest: IUpdateProfileAccountRequest;
    updatePhoneRequest: IUpdatePhoneRequest;
    updatePhotoRequest: IUpdatePhotoRequest;

    constructor(accountsPersistenceService: AccountsPersistenceService) {
        this.createAccountRequest = accountsPersistenceService;
        this.updateProfileAccountRequest = accountsPersistenceService;
        this.updatePhoneRequest = accountsPersistenceService;
        this.updatePhotoRequest = accountsPersistenceService;
    }
    @Post()
    async createAccount(@Body() createAccountDto: CreateAccountDto) {
        const result = await this.createAccountRequest.createTheAccount(createAccountDto);
        return result;
    }
    @Post()
    recoveryPassword() {}
    @Put(':accountId')
    updateProfileAccount(
        @Param('accountId') accountId: string,
        @Body() updateProfileAccountDto: UpdateProfileAccountDto,
    ) {
        return this.updateProfileAccountRequest.updateTheProfileAccount(accountId, updateProfileAccountDto);
    }
    @Post(':accountId/phone')
    updatePhone(@Param('accountId') accountId: string, @Body() updatePhoneDto: UpdatePhoneDto) {
        return this.updatePhoneRequest.updateThePhone(accountId, updatePhoneDto);
    }
    @Post(':accountId/photo')
    updatePhoto(@Param('accountId') accountId: string, @Body() updatePhoneDto: UpdatePhoneDto) {
        return this.updatePhoneRequest.updateThePhone(accountId, updatePhoneDto);
    }
}
