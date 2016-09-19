import 'reflect-metadata';
import 'zone.js';
import { ReflectiveInjector } from '@angular/core';
import {
    EXPRESS_PROVIDERS,
    ENVIRONMENT_PROVIDERS,
    ExpressApplication,
} from './shared';

import { STATUS_PROVIDERS } from './status';
import { MAIN_PROVIDERS } from './main.module';

function main() {
    const injector = ReflectiveInjector.resolveAndCreate([
        ...EXPRESS_PROVIDERS,
        ...ENVIRONMENT_PROVIDERS,
        ...STATUS_PROVIDERS,
        ...MAIN_PROVIDERS,
    ]);

    const server = injector.get(ExpressApplication);
    server.start();
}

main();
