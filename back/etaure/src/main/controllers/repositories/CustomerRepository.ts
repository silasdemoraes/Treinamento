import { Customer } from "@controllers/models/Customer";
import { injectable } from "inversify";
import { getRepository, Repository } from "typeorm";
import { ICustomerRepository } from "./ICustomerRepository";

@injectable()
export class CustomerRepository implements ICustomerRepository {

    private ormRepository: Repository<Customer>;
    
    constructor() {
        this.ormRepository = getRepository(Customer);
    }
 
    async list(): Promise<Customer[]> {
        let customers: Customer[] = await this.ormRepository.find();

        return customers;
    }

}