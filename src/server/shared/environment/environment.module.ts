import { NgModule, OpaqueToken } from '@angular/core';

const environment: Environment = require('config/environment');

export const EnvironmentToken = new OpaqueToken('environment');
export const ENVIRONMENT_PROVIDERS = [
    { provide: EnvironmentToken, useValue: environment },
];

@NgModule({
    providers: [
        ...ENVIRONMENT_PROVIDERS,
    ],
})
export class EnvironmentModule { }
