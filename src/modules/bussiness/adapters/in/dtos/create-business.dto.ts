import { IsNumber, IsString } from 'class-validator';

export class CreateBusinessDto {
    private id: string;

    @IsString()
    private name: string;

    @IsString()
    private description: string;

    @IsNumber()
    private phone: number;

    @IsString()
    private countryCode: string;

    @IsNumber()
    private cellphone: number;

    @IsString()
    private address: string;

    @IsString()
    private city: string;

    @IsString()
    private logo: string;

    private state: boolean;

    set setId(id: string) {
        this.id = id;
    }

    set setState(state: boolean) {
        this.state = state;
    }
}
