import { IsString } from 'class-validator';

export class CreateMenuDto {
    private id: string;

    @IsString()
    private name: string;

    @IsString()
    private description: string;

    private state: boolean;

    set setId(id: string) {
        this.id = id;
    }

    set setState(state: boolean) {
        this.state = state;
    }
}
