import IndexController from '@controllers/IndexController';
import { CustomerRepository } from '@controllers/repositories/CustomerRepository';
import { ICustomerRepository } from '@controllers/repositories/ICustomerRepository';
import TYPES from '@types';
import { IListCustomersUseCase } from '@useCases/customers/IListCustomersUseCase';
import { ListCustomersUseCase } from '@useCases/customers/ListCustomersUseCase';
import { AsyncContainerModule } from 'inversify';
import { createConnection } from 'typeorm';

export const bindings = new AsyncContainerModule(async (bind) => {

    await createConnection();

    bind<IndexController>(TYPES.IndexController).to(IndexController);

    bind<IListCustomersUseCase>(TYPES.ListCustomersUseCase).to(ListCustomersUseCase);

    bind<ICustomerRepository>(TYPES.CustomerRepository).to(CustomerRepository);

});
