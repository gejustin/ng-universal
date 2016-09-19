/// <reference path="../../../../config/environment.d.ts" />

import {
    Injectable,
    Inject,
    Injector,
} from '@angular/core';

import { Application } from 'express';

import {
    Express,
    ExpressToken,
    Compression,
    CompressionToken,
    RoutingControllerToken,
    RoutingController,
    Ng2ExpressEngineToken,
    Ng2ExpressEngine,
} from './express.module';

import { EnvironmentToken } from '../environment';

@Injectable()
export class ExpressApplication {

    private app: Application;

    constructor(
        @Inject(ExpressToken) private express: Express,
        @Inject(CompressionToken) private compression: Compression,
        @Inject(EnvironmentToken) private environment: Environment,
        @Inject(RoutingControllerToken) private routingController: RoutingController,
        @Inject(Ng2ExpressEngineToken) private ng2ExpressEngine: Ng2ExpressEngine,
        private injector: Injector
    ) {
        this.app = express();
        this.init();
    }

    public init() {
        this.app.use(this.compression());

        this.app.engine('.html', this.ng2ExpressEngine.createEngine({precompile: true}));
        this.app.set('views', this.environment.BUILD_DIR);
        this.app.set('view engine', 'html');

        this.routingController.useContainer(this.injector, {
            fallback: true,
            fallbackOnErrors: true,
        });
        this.app = this.routingController.useExpressServer(this.app, {
            useClassTransformer: false,
        });

        this.app.use(this.express.static(this.environment.PUBLIC_DIR));
    }

    public start() {
        this.app.listen(this.environment.PORT, () => {
            console.log(`The app is listening on port: ${this.environment.PORT}`);
        });
    }
}
