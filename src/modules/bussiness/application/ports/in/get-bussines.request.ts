import { ISetIdsToAccessTheBusiness } from 'src/shared/interfaces/set-ids/set-ids-to-access';

export interface IGetBussinesRequest {
    getTheBussines(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness): any;
}
