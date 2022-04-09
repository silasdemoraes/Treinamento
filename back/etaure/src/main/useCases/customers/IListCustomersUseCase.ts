import { Customer } from "@controllers/models/Customer";

export interface IListCustomersUseCase {

    execute() : Promise<Customer[]>;

}