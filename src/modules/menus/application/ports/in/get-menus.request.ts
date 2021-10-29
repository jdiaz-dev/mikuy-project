import { ISetIdsToAccessTheBusiness } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { ISetQueries } from 'src/shared/interfaces/set-queries';

export interface IGetMenusRequest {
    getTheMenus(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness, setQueries: ISetQueries): any;
}
