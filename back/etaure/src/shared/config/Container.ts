import IndexController from '@controllers/IndexController';
import { IRequestUtil, RequestUtil } from '@httputil/requestUtil';
import TYPES from '@types';
import { AsyncContainerModule } from 'inversify';
import { createConnection } from 'typeorm';

export const bindings = new AsyncContainerModule(async (bind) => {

    await createConnection();

    bind<IndexController>(TYPES.IndexController).to(IndexController);

});
