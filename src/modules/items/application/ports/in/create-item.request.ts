import { CreateItemDto } from 'src/modules/items/adapters/in/dtos/create-item.dto';
import { ISetIdsToAccessTheCategory } from 'src/shared/interfaces/set-ids/set-ids-to-access';

export interface ICreateItemRequest {
    createTheItem(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory, createItemDto: CreateItemDto): any;
}
