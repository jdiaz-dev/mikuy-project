import { IsNumber, IsString } from 'class-validator';

export class UpdateBusinessDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    phone: number;

    @IsNumber()
    cellphone: number;

    @IsString()
    address: string;

    @IsString()
    city: string;

    @IsString()
    logo: string;
}
