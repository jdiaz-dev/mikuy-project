import { CreateBusinessDto } from 'src/modules/bussiness/adapters/in/dtos/create-business.dto';

export interface ICreateBussinesRequest {
    createTheBussines(accountId: string, createBusinessDto: CreateBusinessDto): any;
}
