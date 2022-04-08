import * as express from "express";
import {
    controller,
    httpGet,
    requestParam,
    response,
    request,
    queryParam,
} from "inversify-express-utils";

@controller("")
export default class IndexController { 

    constructor(
    ) {
    }
    
    @httpGet("/:name")
    public async index(
        @response() res: express.Response,
        @requestParam("name") name: string,
        @request() req: express.Request) {


        await res.send(`Olá mundo: ${name}`);
    }
}