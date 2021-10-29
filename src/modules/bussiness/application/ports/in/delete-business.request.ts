import { ISetIdsToAccessTheBusiness } from 'src/shared/interfaces/set-ids/set-ids-to-access';

export interface IDeleteBusinessRequest {
    deleteTheBusiness(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness): any;
}
