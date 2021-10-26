import { IsNumber, IsString, IsEmail } from 'class-validator';

export class UpdateProfileAccountDto {
    @IsString()
    names: string;

    @IsString()
    surnames: string;

    @IsNumber()
    phone: number;

    @IsString()
    photo: string;
}
