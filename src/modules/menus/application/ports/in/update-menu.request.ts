import { UpdateMenuDto } from 'src/modules/menus/adapters/in/dtos/update-menu.dto';
import { ISetIdsToAccessTheMenu } from 'src/shared/interfaces/set-ids/set-ids-to-access';

export interface IUpdateMenuRequest {
    udpateTheMenu(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu, updateMenuDto: UpdateMenuDto): any;
}
