import { Customer } from "@controllers/models/Customer";

export interface ICustomerRepository {

    list(): Promise<Customer[]>;

}