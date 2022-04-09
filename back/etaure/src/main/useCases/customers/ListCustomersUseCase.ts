import { Customer } from "@controllers/models/Customer";
import { ICustomerRepository } from "@controllers/repositories/ICustomerRepository";
import TYPES from "@types";
import { inject, injectable } from "inversify";
import { IListCustomersUseCase } from "./IListCustomersUseCase";

@injectable()
export class ListCustomersUseCase implements IListCustomersUseCase {

    constructor(
        @inject(TYPES.CustomerRepository)
        private customerRepository: ICustomerRepository
    ) {

    }

    async execute(): Promise<Customer[]> {
        
        const listCustomer: Customer[] = await this.customerRepository.list();

        return listCustomer;
    }

}