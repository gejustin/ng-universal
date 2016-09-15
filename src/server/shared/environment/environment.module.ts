import { NgModule, OpaqueToken } from '@angular/core';

const environment: Environment = require('config/environment');

export const EnvironmentToken = new OpaqueToken('environment');

@NgModule({
    providers: [
        { provide: EnvironmentToken, useValue: environment },
    ],
})
export class EnvironmentModule { }
