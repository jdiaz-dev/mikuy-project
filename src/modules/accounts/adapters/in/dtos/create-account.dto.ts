import { IsNumber, IsString, IsEmail } from 'class-validator';

export class CreateAccountDto {
    id: string;

    @IsEmail()
    email: string;

    @IsString()
    names: string;

    @IsString()
    surnames: string;

    @IsString()
    password: string;

    @IsString()
    countryCode: string;

    @IsNumber()
    phone: number;

    @IsString()
    photo: string;

    set setId(id: string) {
        this.id = id;
    }
}
