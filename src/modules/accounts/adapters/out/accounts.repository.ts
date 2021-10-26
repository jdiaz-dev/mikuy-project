import { CreateAccountDto } from '../in/dtos/create-account.dto';
import { UpdatePhotoDto } from '../in/dtos/update-photo.dto';
import { UpdateProfileAccountDto } from '../in/dtos/update-profile-account';
import { UpdatePhoneDto } from './../in/dtos/update-phone.dto';

export interface IAccountsRepository {
    createAccount(createAccountDto: CreateAccountDto): Promise<any>;
    getAccountByEmail(accountId: string): Promise<any>;
    updateProfile(accountId: string, updateProfileAccountDto: UpdateProfileAccountDto): Promise<any>;
    updatePhone(accountId: string, updatePhoneDto: UpdatePhoneDto): Promise<any>;
    updatePhoto(accountId: string, updatePhotoDto: UpdatePhotoDto): Promise<any>;
}
