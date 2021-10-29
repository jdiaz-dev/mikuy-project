import { IsNumber, IsString } from 'class-validator';

export class CreateItemDto {
    private id: string;

    @IsString()
    private name: string;

    @IsString()
    private description: string;

    @IsNumber()
    private price: number;

    @IsString()
    private photo: string;

    @IsString()
    private money: string;

    private state: boolean;

    set setId(id: string) {
        this.id = id;
    }

    set setState(state: boolean) {
        this.state = state;
    }
}
