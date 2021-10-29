import { ISetIdsToAccessTheItem } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { UpdateItemDto } from './../../../adapters/in/dtos/update-item.dto';

export interface IUpdateItemRequest {
    updateTheItem(setIdsToAccessTheItem: ISetIdsToAccessTheItem, updateItemDto: UpdateItemDto): any;
}
