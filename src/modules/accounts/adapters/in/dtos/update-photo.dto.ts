import { IsString } from 'class-validator';

export class UpdatePhotoDto {
    @IsString()
    photo: string;
}
