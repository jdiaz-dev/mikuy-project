import { ISetIdsToAccessTheBusiness, ISetIdsToAccessTheMenu } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { ISetQueries } from 'src/shared/interfaces/set-queries';
import { CreateMenuDto } from '../in/dtos/create-menu.dto';
import { UpdateMenuDto } from '../in/dtos/update-menu.dto';

export interface IMenuRepository {
    createMenu(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness, createMenuDto: CreateMenuDto): Promise<any>;
    getMenu(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu): Promise<any>;
    getMenus(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness, setQueries: ISetQueries): Promise<any>;
    udpateMenu(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu, updateMenuDto: UpdateMenuDto): Promise<any>;
    deleteMenu(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu): Promise<any>;
}
