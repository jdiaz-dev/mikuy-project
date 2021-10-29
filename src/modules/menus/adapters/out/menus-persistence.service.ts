import { Injectable } from '@nestjs/common';
import { ISetIdsToAccessTheBusiness, ISetIdsToAccessTheMenu } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { ISetQueries } from 'src/shared/interfaces/set-queries';
import { ICreateMenuRequest } from '../../application/ports/in/create-menu.request';
import { IDeleteMenuRequest } from '../../application/ports/in/delete-menu.request';
import { IGetMenuRequest } from '../../application/ports/in/get-menu.request';
import { IGetMenusRequest } from '../../application/ports/in/get-menus.request';
import { IUpdateMenuRequest } from '../../application/ports/in/update-menu.request';
import { CreateMenuDto } from '../in/dtos/create-menu.dto';
import { UpdateMenuDto } from '../in/dtos/update-menu.dto';
import { MenusCypherService } from './menus-cypher.service';
import { IMenuRepository } from './menus.repository';

@Injectable()
export class MenusPersistenceService
    implements ICreateMenuRequest, IGetMenuRequest, IGetMenusRequest, IUpdateMenuRequest, IDeleteMenuRequest
{
    private menuRepository: IMenuRepository;

    constructor(menusCypherService: MenusCypherService) {
        this.menuRepository = menusCypherService;
    }

    createTheMenu(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness, createMenuDto: CreateMenuDto): any {
        return this.menuRepository.createMenu(setIdsToAccessTheBusiness, createMenuDto);
    }
    getTheMenu(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu): any {
        return this.menuRepository.getMenu(setIdsToAccessTheMenu);
    }
    getTheMenus(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness, setQueries: ISetQueries): any {
        return this.menuRepository.getMenus(setIdsToAccessTheBusiness, setQueries);
    }
    udpateTheMenu(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu, updateMenuDto: UpdateMenuDto): any {
        return this.menuRepository.udpateMenu(setIdsToAccessTheMenu, updateMenuDto);
    }
    deleteTheMenu(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu): any {
        return this.menuRepository.deleteMenu(setIdsToAccessTheMenu);
    }
}
