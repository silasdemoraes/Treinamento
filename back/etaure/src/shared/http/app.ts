import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import config from '../config/Config';
import requestLogger from './middleware/RequestLogger';
import { bindings } from '@container';
import cookieParser from "cookie-parser";
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';

export class App {
    public express: express.Application;
    public usePino = false;
    public container: any;
    public static instance: App;

    constructor() {
        App.instance = this;
    }

    private middlewares(app): void {
        app.use(cors());
        app.use(express.json());
        app.use(requestLogger);
        app.use(cookieParser());
    }

    public async configure() {
        this.container = new Container();
        await this.container.loadAsync(bindings);
        const app = new InversifyExpressServer(this.container);
        app.setConfig((mid) => {
            this.middlewares(mid);
        })
        this.express = app.build();
        this.express.set('port', config.port);
    }
}

export default new App();
