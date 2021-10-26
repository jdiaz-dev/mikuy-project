import { UpdatePhotoDto } from 'src/modules/accounts/adapters/in/dtos/update-photo.dto';

export interface IUpdatePhotoRequest {
    updateThePhoto(accountId: string, updatePhotoDto: UpdatePhotoDto): any;
}
