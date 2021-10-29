import { IsString } from 'class-validator';

export class UpdateProfileAccountDto {
    @IsString()
    names: string;

    @IsString()
    surnames: string;

    @IsString()
    photo: string;
}
