import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';

import {
    ExpressModule,
    ExpressApplication,
    EnvironmentModule,
} from './shared';

import { StatusModule } from './status';
import { AppController } from './app.controller';

export const MAIN_PROVIDERS = [
    ExpressApplication,
    AppController,
];

@NgModule({
    imports: [
        UniversalModule,
        EnvironmentModule,
        ExpressModule,
        StatusModule,
    ],
    providers: [
        ...MAIN_PROVIDERS,
    ],
})
export class MainModule {

    constructor(private expressApp: ExpressApplication) { ; }

    public ngDoBootstrap() {
        this.expressApp.start();
    }
}
