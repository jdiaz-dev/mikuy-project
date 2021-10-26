import { CreateAccountDto } from './../../../adapters/in/dtos/create-account.dto';

export interface ICreateAccountRequest {
  createTheAccount(createAccountDto: CreateAccountDto): any;
}
