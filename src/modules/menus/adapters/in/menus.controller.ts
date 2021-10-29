import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ICreateMenuRequest } from '../../application/ports/in/create-menu.request';
import { IDeleteMenuRequest } from '../../application/ports/in/delete-menu.request';
import { IGetMenuRequest } from '../../application/ports/in/get-menu.request';
import { IGetMenusRequest } from '../../application/ports/in/get-menus.request';
import { IUpdateMenuRequest } from '../../application/ports/in/update-menu.request';
import { MenusPersistenceService } from '../out/menus-persistence.service';
import { CreateMenuDto } from './dtos/create-menu.dto';
import { UpdateMenuDto } from './dtos/update-menu.dto';
import { LimitPipe } from './../../../../shared/pipes/limit.pipe';

@Controller('accounts/:accountId/businesses/:businessId/menus')
export class MenusController {
    createMenuRequest: ICreateMenuRequest;
    getMenuRequest: IGetMenuRequest;
    getMenusRequest: IGetMenusRequest;
    updateMenuRequest: IUpdateMenuRequest;
    deleteMenuRequest: IDeleteMenuRequest;

    constructor(menusPersistenceService: MenusPersistenceService) {
        this.createMenuRequest = menusPersistenceService;
        this.getMenuRequest = menusPersistenceService;
        this.getMenusRequest = menusPersistenceService;
        this.updateMenuRequest = menusPersistenceService;
        this.deleteMenuRequest = menusPersistenceService;
    }

    @Post()
    createMenu(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Body() createMenuDto: CreateMenuDto,
    ) {
        return this.createMenuRequest.createTheMenu({ accountId, businessId }, createMenuDto);
    }

    @Get(':menuId')
    getMenu(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Param('menuId') menuId: string,
    ) {
        return this.getMenuRequest.getTheMenu({ accountId, businessId, menuId });
    }

    @Get()
    getMenus(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,

        @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
        @Query('size', new DefaultValuePipe(30), ParseIntPipe, LimitPipe) size: number,
        @Query('orderBy', new DefaultValuePipe('_id')) orderBy: string,
        @Query('search', new DefaultValuePipe('')) search: string,
    ) {
        return this.getMenusRequest.getTheMenus({ accountId, businessId }, { offset, size, orderBy });
    }

    @Put(':menuId')
    updateMenu(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Param('menuId') menuId: string,
        @Body() updateMenuDto: UpdateMenuDto,
    ) {
        return this.updateMenuRequest.udpateTheMenu({ accountId, businessId, menuId }, updateMenuDto);
    }

    @Delete(':menuId')
    deleteMenu(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Param('menuId') menuId: string,
    ) {
        return this.deleteMenuRequest.deleteTheMenu({ accountId, businessId, menuId });
    }
}
