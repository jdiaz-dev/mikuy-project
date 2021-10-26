import { Controller } from '@nestjs/common';

/* 
  3. Menu

id: uuid

name: string

description: string
*/
@Controller('menus')
export class MenusController {
    createMenu() {}
    //by id
    getMenu() {}
    getMenus() {}
    updateMenu() {}
    deleteMenu() {}
}
