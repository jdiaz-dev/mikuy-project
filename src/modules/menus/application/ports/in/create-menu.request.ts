import { CreateMenuDto } from 'src/modules/menus/adapters/in/dtos/create-menu.dto';
import { ISetIdsToAccessTheBusiness } from 'src/shared/interfaces/set-ids/set-ids-to-access';

export interface ICreateMenuRequest {
    createTheMenu(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness, createMenuDto: CreateMenuDto): any;
}
