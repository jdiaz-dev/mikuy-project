import { UpdateBusinessDto } from 'src/modules/bussiness/adapters/in/dtos/update-business.dto';
import { ISetIdsToAccessTheBusiness } from 'src/shared/interfaces/set-ids/set-ids-to-access';

export interface IUpdateBussinesRequest {
    updateTheBussines(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness, updateBusinessDto: UpdateBusinessDto): any;
}
