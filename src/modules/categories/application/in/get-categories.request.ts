import { ISetIdsToAccessTheMenu } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { ISetQueries } from 'src/shared/interfaces/set-queries';

export interface IGetCategoriesRequest {
    getTheCategories(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu, setQueries: ISetQueries): any;
}
