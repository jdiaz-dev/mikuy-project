import { CreateBusinessDto } from '../in/dtos/create-business.dto';
import { UpdateBusinessDto } from '../in/dtos/update-business.dto';
import { UpdateLogoDto } from '../in/dtos/update-logo.dto';
import { ISetIdsToAccessTheBusiness } from '../../../../shared/interfaces/set-ids/set-ids-to-access';

export interface IBussinesRepository {
    createBussines(accountId: string, createBusinessDto: CreateBusinessDto): Promise<any>;
    getBussines(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness): Promise<any>;
    updateBussiness(
        setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness,
        updateBusinessDto: UpdateBusinessDto,
    ): Promise<any>;
    updateLogo(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness, updateLogoDto: UpdateLogoDto): Promise<any>;
    deleteBussines(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness): Promise<any>;
}
