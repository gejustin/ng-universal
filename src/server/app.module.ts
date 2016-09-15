import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';

import {
    ExpressModule,
    ExpressApplication,
    EnvironmentModule,
} from './shared';

import { StatusModule } from './status';
import { AppController } from './app.controller';
@NgModule({
    imports: [
        UniversalModule.withConfig({
            originUrl: 'http://localhost:3000',
            baseUrl: '/',
            requestUrl: '/',
        }),
        EnvironmentModule,
        ExpressModule,
        StatusModule,
    ],
    providers: [ExpressApplication, AppController],
})
export class AppModule {

    constructor(private expressApp: ExpressApplication) { ; }

    public ngDoBootstrap() {
        this.expressApp.start();
    }
}
