import { UpdatePhoneDto } from 'src/modules/accounts/adapters/in/dtos/update-phone.dto';

export interface IUpdatePhoneRequest {
    updateThePhone(accountId: string, updatePhoneDto: UpdatePhoneDto): any;
}
