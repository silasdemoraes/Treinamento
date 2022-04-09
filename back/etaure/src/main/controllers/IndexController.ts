import TYPES from "@types";
import { IListCustomersUseCase } from "@useCases/customers/IListCustomersUseCase";
import { ListCustomersUseCase } from "@useCases/customers/ListCustomersUseCase";
import * as express from "express";
import { inject } from "inversify";
import {
    controller,
    httpGet,
    requestParam,
    response,
    request,
    queryParam,
    httpPost,
    TYPE,
} from "inversify-express-utils";

@controller("")
export default class IndexController { 

    constructor(
        @inject(TYPES.ListCustomersUseCase)
            private listCustomersUseCase: IListCustomersUseCase
    ) {
    }
    
    @httpGet("/:name/:numero")
    public async index(
        @response() res: express.Response,
        @requestParam("name") name: string,
        @requestParam("numero") numero: number,
        @queryParam("parametroOpcional") parametroOpcional: string,
        @request() req: express.Request) {

          let teste =  req.query.parametroOpcional;

          console.log(parametroOpcional);
          console.log(teste);

        await res.send(`Olá mundo: ${name} - ${numero}`);
    }

    @httpPost("/")
    public async post(
        @response() res: express.Response,
        @request() req: express.Request) {

        const listCustomers = await this.listCustomersUseCase.execute();

        res.send(listCustomers);
    }
}