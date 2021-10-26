import { UpdateProfileAccountDto } from 'src/modules/accounts/adapters/in/dtos/update-profile-account';

export interface IUpdateProfileAccountRequest {
    updateTheProfileAccount(id: string, updateProfileAccountDto: UpdateProfileAccountDto): any;
}
