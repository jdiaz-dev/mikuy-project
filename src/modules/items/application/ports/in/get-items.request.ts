import { ISetIdsToAccessTheCategory } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { ISetQueries } from 'src/shared/interfaces/set-queries';

export interface IGetItemsRequest {
    getTheItems(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory, setQueries: ISetQueries): any;
}
